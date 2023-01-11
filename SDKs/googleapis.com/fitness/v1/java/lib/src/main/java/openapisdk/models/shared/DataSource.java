package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSource
 * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
**/
public class DataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public Application application;
    public DataSource withApplication(Application application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataQualityStandard")
    public DataSourceDataQualityStandardEnum[] dataQualityStandard;
    public DataSource withDataQualityStandard(DataSourceDataQualityStandardEnum[] dataQualityStandard) {
        this.dataQualityStandard = dataQualityStandard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataStreamId")
    public String dataStreamId;
    public DataSource withDataStreamId(String dataStreamId) {
        this.dataStreamId = dataStreamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataStreamName")
    public String dataStreamName;
    public DataSource withDataStreamName(String dataStreamName) {
        this.dataStreamName = dataStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public DataType dataType;
    public DataSource withDataType(DataType dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public Device device;
    public DataSource withDevice(Device device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DataSource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DataSourceTypeEnum type;
    public DataSource withType(DataSourceTypeEnum type) {
        this.type = type;
        return this;
    }
}