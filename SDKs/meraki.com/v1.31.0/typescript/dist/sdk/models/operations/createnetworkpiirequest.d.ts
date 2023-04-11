import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * One of "delete" or "restrict processing"
 */
export declare enum CreateNetworkPiiRequestRequestBodyTypeEnum {
    Delete = "delete",
    RestrictProcessing = "restrict processing"
}
export declare class CreateNetworkPiiRequestRequestBody extends SpeakeasyBase {
    /**
     * The datasets related to the provided key that should be deleted. Only applies to "delete" requests. The value "all" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user)
     */
    datasets?: string[];
    /**
     * The email of a network user account. Only applies to "delete" requests.
     */
    email?: string;
    /**
     * The MAC of a network client device. Applies to both "restrict processing" and "delete" requests.
     */
    mac?: string;
    /**
     * The sm_device_id of a Systems Manager device. The only way to "restrict processing" or "delete" a Systems Manager device. Must include "device" in the dataset for a "delete" request to destroy the device.
     */
    smDeviceId?: string;
    /**
     * The sm_user_id of a Systems Manager user. The only way to "restrict processing" or "delete" a Systems Manager user. Must include "user" in the dataset for a "delete" request to destroy the user.
     */
    smUserId?: string;
    /**
     * One of "delete" or "restrict processing"
     */
    type?: CreateNetworkPiiRequestRequestBodyTypeEnum;
    /**
     * The username of a network log in. Only applies to "delete" requests.
     */
    username?: string;
}
export declare class CreateNetworkPiiRequestRequest extends SpeakeasyBase {
    requestBody?: CreateNetworkPiiRequestRequestBody;
    networkId: string;
}
export declare class CreateNetworkPiiRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkPiiRequest201ApplicationJSONObject?: Record<string, any>;
}
