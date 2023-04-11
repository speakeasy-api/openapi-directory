import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAppliancePrefixesDelegatedStaticRequest extends SpeakeasyBase {
    networkId: string;
    staticDelegatedPrefixId: string;
}
/**
 * WAN1/WAN2/Independent prefix.
 */
export declare class GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONOrigin extends SpeakeasyBase {
    /**
     * Uplink provided or independent
     */
    interfaces?: string[];
    /**
     * Origin type
     */
    type?: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON extends SpeakeasyBase {
    /**
     * Prefix creation time.
     */
    createdAt?: Date;
    /**
     * Identifying description for the prefix.
     */
    description?: string;
    /**
     * WAN1/WAN2/Independent prefix.
     */
    origin?: GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONOrigin;
    /**
     * IPv6 prefix/prefix length.
     */
    prefix?: string;
    /**
     * Static delegated prefix id.
     */
    staticDelegatedPrefixId?: string;
    /**
     * Prefix Updated time.
     */
    updatedAt?: Date;
}
export declare class GetNetworkAppliancePrefixesDelegatedStaticResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject?: GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON;
}
