import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
import { DataType } from "./datatype";
import { Device } from "./device";
export declare enum DataSourceDataQualityStandardEnum {
    DataQualityUnknown = "dataQualityUnknown",
    DataQualityBloodPressureEsh2002 = "dataQualityBloodPressureEsh2002",
    DataQualityBloodPressureEsh2010 = "dataQualityBloodPressureEsh2010",
    DataQualityBloodPressureAami = "dataQualityBloodPressureAami",
    DataQualityBloodPressureBhsAA = "dataQualityBloodPressureBhsAA",
    DataQualityBloodPressureBhsAB = "dataQualityBloodPressureBhsAB",
    DataQualityBloodPressureBhsBA = "dataQualityBloodPressureBhsBA",
    DataQualityBloodPressureBhsBB = "dataQualityBloodPressureBhsBB",
    DataQualityBloodGlucoseIso151972003 = "dataQualityBloodGlucoseIso151972003",
    DataQualityBloodGlucoseIso151972013 = "dataQualityBloodGlucoseIso151972013"
}
/**
 * A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.
 */
export declare enum DataSourceTypeEnum {
    Raw = "raw",
    Derived = "derived"
}
/**
 * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
 */
export declare class DataSource extends SpeakeasyBase {
    application?: Application;
    /**
     * DO NOT POPULATE THIS FIELD. It is never populated in responses from the platform, and is ignored in queries. It will be removed in a future version entirely.
     */
    dataQualityStandard?: DataSourceDataQualityStandardEnum[];
    /**
     * A unique identifier for the data stream produced by this data source. The identifier includes: - The physical device's manufacturer, model, and serial number (UID). - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client. - The data source's type. - The data source's stream name. Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal. The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number Finally, the developer project number and device UID are obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form. This means a client will see a different set of data_stream_ids than another client with different credentials.
     */
    dataStreamId?: string;
    /**
     * The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors.
     */
    dataStreamName?: string;
    dataType?: DataType;
    /**
     * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source. The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including: - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version.
     */
    device?: Device;
    /**
     * An end-user visible name for this data source.
     */
    name?: string;
    /**
     * A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.
     */
    type?: DataSourceTypeEnum;
}
