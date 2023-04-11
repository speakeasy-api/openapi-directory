import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSensorRelationshipsRequest extends SpeakeasyBase {
    serial: string;
}
/**
 * The product type of the related device
 */
export declare enum GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevicesProductTypeEnum {
    Camera = "camera",
    Sensor = "sensor"
}
export declare class GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevices extends SpeakeasyBase {
    /**
     * The product type of the related device
     */
    productType?: GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevicesProductTypeEnum;
    /**
     * The serial of the related device
     */
    serial?: string;
}
/**
 * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
 */
export declare class GetDeviceSensorRelationships200ApplicationJSONLivestream extends SpeakeasyBase {
    /**
     * An array of the related devices for the role
     */
    relatedDevices?: GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevices[];
}
export declare class GetDeviceSensorRelationships200ApplicationJSON extends SpeakeasyBase {
    /**
     * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
     */
    livestream?: GetDeviceSensorRelationships200ApplicationJSONLivestream;
}
export declare class GetDeviceSensorRelationshipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSensorRelationships200ApplicationJSONObjects?: GetDeviceSensorRelationships200ApplicationJSON[];
}
