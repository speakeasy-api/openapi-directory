import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIsosIdRequest extends SpeakeasyBase {
    /**
     * ID of the ISO
     */
    id: number;
}
/**
 * Type of the ISO
 */
export declare enum GetIsosId200ApplicationJSONIsoTypeEnum {
    Public = "public",
    Private = "private"
}
export declare class GetIsosId200ApplicationJSONIso extends SpeakeasyBase {
    /**
     * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
     */
    deprecated: string;
    /**
     * Description of the ISO
     */
    description: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Unique identifier of the ISO. Only set for public ISOs
     */
    name: string;
    /**
     * Type of the ISO
     */
    type: GetIsosId200ApplicationJSONIsoTypeEnum;
}
/**
 * The `iso` key in the reply contains an array of ISO objects with this structure
 */
export declare class GetIsosId200ApplicationJSON extends SpeakeasyBase {
    iso: GetIsosId200ApplicationJSONIso;
}
export declare class GetIsosIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `iso` key in the reply contains an array of ISO objects with this structure
     */
    getIsosId200ApplicationJSONObject?: GetIsosId200ApplicationJSON;
}
