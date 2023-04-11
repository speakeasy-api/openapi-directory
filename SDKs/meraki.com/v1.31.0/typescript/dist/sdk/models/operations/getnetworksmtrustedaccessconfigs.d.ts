import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmTrustedAccessConfigsRequest extends SpeakeasyBase {
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
/**
 * type of access period, either a static range or a dynamic period
 */
export declare enum GetNetworkSmTrustedAccessConfigs200ApplicationJSONTimeboundTypeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
export declare class GetNetworkSmTrustedAccessConfigs200ApplicationJSON extends SpeakeasyBase {
    /**
     * time that access ends
     */
    accessEndAt?: Date;
    /**
     * time that access starts
     */
    accessStartAt?: Date;
    /**
     * device ID
     */
    id?: string;
    /**
     * device name
     */
    name?: string;
    /**
     * scope
     */
    scope?: string;
    /**
     * SSID name
     */
    ssidName?: string;
    /**
     * device tags
     */
    tags?: string[];
    /**
     * type of access period, either a static range or a dynamic period
     */
    timeboundType?: GetNetworkSmTrustedAccessConfigs200ApplicationJSONTimeboundTypeEnum;
}
export declare class GetNetworkSmTrustedAccessConfigsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmTrustedAccessConfigs200ApplicationJSONObjects?: GetNetworkSmTrustedAccessConfigs200ApplicationJSON[];
}
