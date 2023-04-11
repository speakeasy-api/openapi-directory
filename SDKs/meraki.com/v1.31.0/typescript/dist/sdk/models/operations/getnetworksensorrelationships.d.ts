import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSensorRelationshipsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * The product type of the device
 */
export declare enum GetNetworkSensorRelationships200ApplicationJSONDeviceProductTypeEnum {
    Camera = "camera",
    Sensor = "sensor"
}
/**
 * A sensor or gateway device in the network
 */
export declare class GetNetworkSensorRelationships200ApplicationJSONDevice extends SpeakeasyBase {
    /**
     * The name of the device
     */
    name?: string;
    /**
     * The product type of the device
     */
    productType?: GetNetworkSensorRelationships200ApplicationJSONDeviceProductTypeEnum;
    /**
     * The serial of the device
     */
    serial?: string;
}
/**
 * The product type of the related device
 */
export declare enum GetNetworkSensorRelationships200ApplicationJSONRelationshipsLivestreamRelatedDevicesProductTypeEnum {
    Camera = "camera",
    Sensor = "sensor"
}
export declare class GetNetworkSensorRelationships200ApplicationJSONRelationshipsLivestreamRelatedDevices extends SpeakeasyBase {
    /**
     * The product type of the related device
     */
    productType?: GetNetworkSensorRelationships200ApplicationJSONRelationshipsLivestreamRelatedDevicesProductTypeEnum;
    /**
     * The serial of the related device
     */
    serial?: string;
}
/**
 * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
 */
export declare class GetNetworkSensorRelationships200ApplicationJSONRelationshipsLivestream extends SpeakeasyBase {
    /**
     * An array of the related devices for the role
     */
    relatedDevices?: GetNetworkSensorRelationships200ApplicationJSONRelationshipsLivestreamRelatedDevices[];
}
/**
 * An object describing the relationships defined between the device and other devices
 */
export declare class GetNetworkSensorRelationships200ApplicationJSONRelationships extends SpeakeasyBase {
    /**
     * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
     */
    livestream?: GetNetworkSensorRelationships200ApplicationJSONRelationshipsLivestream;
}
export declare class GetNetworkSensorRelationships200ApplicationJSON extends SpeakeasyBase {
    /**
     * A sensor or gateway device in the network
     */
    device?: GetNetworkSensorRelationships200ApplicationJSONDevice;
    /**
     * An object describing the relationships defined between the device and other devices
     */
    relationships?: GetNetworkSensorRelationships200ApplicationJSONRelationships;
}
export declare class GetNetworkSensorRelationshipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSensorRelationships200ApplicationJSONObjects?: GetNetworkSensorRelationships200ApplicationJSON[];
}
