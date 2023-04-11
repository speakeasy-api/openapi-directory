import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmUserAccessDevicesRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
export declare class GetNetworkSmUserAccessDevices200ApplicationJSONTrustedAccessConnections extends SpeakeasyBase {
    /**
     * time that config was downloaded
     */
    downloadedAt?: string;
    /**
     * time of last connection
     */
    lastConnectedAt?: Date;
    /**
     * time that SCEP completed
     */
    scepCompletedAt?: Date;
    /**
     * config id
     */
    trustedAccessConfigId?: string;
}
export declare class GetNetworkSmUserAccessDevices200ApplicationJSON extends SpeakeasyBase {
    /**
     * user email
     */
    email?: string;
    /**
     * device ID
     */
    id?: string;
    /**
     * mac address
     */
    mac?: string;
    /**
     * device name
     */
    name?: string;
    /**
     * system type
     */
    systemType?: string;
    /**
     * device tags
     */
    tags?: string[];
    /**
     * Array of trusted access configs
     */
    trustedAccessConnections?: GetNetworkSmUserAccessDevices200ApplicationJSONTrustedAccessConnections[];
    /**
     * username
     */
    username?: string;
}
export declare class GetNetworkSmUserAccessDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmUserAccessDevices200ApplicationJSONObjects?: GetNetworkSmUserAccessDevices200ApplicationJSON[];
}
