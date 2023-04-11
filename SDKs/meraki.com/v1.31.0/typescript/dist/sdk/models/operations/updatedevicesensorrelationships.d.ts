import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices extends SpeakeasyBase {
    /**
     * The serial of the related device
     */
    serial: string;
}
/**
 * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
 */
export declare class UpdateDeviceSensorRelationshipsRequestBodyLivestream extends SpeakeasyBase {
    /**
     * An array of the related devices for the role
     */
    relatedDevices?: UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices[];
}
export declare class UpdateDeviceSensorRelationshipsRequestBody extends SpeakeasyBase {
    /**
     * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
     */
    livestream?: UpdateDeviceSensorRelationshipsRequestBodyLivestream;
}
export declare class UpdateDeviceSensorRelationshipsRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceSensorRelationshipsRequestBody;
    serial: string;
}
/**
 * The product type of the related device
 */
export declare enum UpdateDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevicesProductTypeEnum {
    Camera = "camera",
    Sensor = "sensor"
}
export declare class UpdateDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevices extends SpeakeasyBase {
    /**
     * The product type of the related device
     */
    productType?: UpdateDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevicesProductTypeEnum;
    /**
     * The serial of the related device
     */
    serial?: string;
}
/**
 * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
 */
export declare class UpdateDeviceSensorRelationships200ApplicationJSONLivestream extends SpeakeasyBase {
    /**
     * An array of the related devices for the role
     */
    relatedDevices?: UpdateDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevices[];
}
/**
 * Successful operation
 */
export declare class UpdateDeviceSensorRelationships200ApplicationJSON extends SpeakeasyBase {
    /**
     * A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.
     */
    livestream?: UpdateDeviceSensorRelationships200ApplicationJSONLivestream;
}
export declare class UpdateDeviceSensorRelationshipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceSensorRelationships200ApplicationJSONObject?: UpdateDeviceSensorRelationships200ApplicationJSON;
}
