import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the origin
 */
export declare enum UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type?: UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
}
export declare class UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody extends SpeakeasyBase {
    /**
     * A name or description for the prefix
     */
    description?: string;
    /**
     * The origin of the prefix
     */
    origin?: UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
    /**
     * A static IPv6 prefix
     */
    prefix?: string;
}
export declare class UpdateNetworkAppliancePrefixesDelegatedStaticRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
    networkId: string;
    staticDelegatedPrefixId: string;
}
export declare class UpdateNetworkAppliancePrefixesDelegatedStaticResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject?: Record<string, any>;
}
