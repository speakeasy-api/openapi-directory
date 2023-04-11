import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The ids of the wireless profile to assign to the given camera
 */
export declare class UpdateDeviceCameraWirelessProfilesRequestBodyIds extends SpeakeasyBase {
    /**
     * The id of the backup wireless profile
     */
    backup?: string;
    /**
     * The id of the primary wireless profile
     */
    primary?: string;
    /**
     * The id of the secondary wireless profile
     */
    secondary?: string;
}
export declare class UpdateDeviceCameraWirelessProfilesRequestBody extends SpeakeasyBase {
    /**
     * The ids of the wireless profile to assign to the given camera
     */
    ids: UpdateDeviceCameraWirelessProfilesRequestBodyIds;
}
export declare class UpdateDeviceCameraWirelessProfilesRequest extends SpeakeasyBase {
    requestBody: UpdateDeviceCameraWirelessProfilesRequestBody;
    serial: string;
}
export declare class UpdateDeviceCameraWirelessProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCameraWirelessProfiles200ApplicationJSONObject?: Record<string, any>;
}
