import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAppliancePrefixesDelegatedStaticsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * WAN1/WAN2/Independent prefix.
 */
export declare class GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONOrigin extends SpeakeasyBase {
    /**
     * Uplink provided or independent
     */
    interfaces?: string[];
    /**
     * Origin type
     */
    type?: string;
}
export declare class GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSON extends SpeakeasyBase {
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
    origin?: GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONOrigin;
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
export declare class GetNetworkAppliancePrefixesDelegatedStaticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects?: GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSON[];
}
