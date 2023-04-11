import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the origin
 */
export declare enum CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type?: CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
}
export declare class CreateNetworkAppliancePrefixesDelegatedStaticRequestBody extends SpeakeasyBase {
    /**
     * A name or description for the prefix
     */
    description?: string;
    /**
     * The origin of the prefix
     */
    origin: CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
    /**
     * A static IPv6 prefix
     */
    prefix: string;
}
export declare class CreateNetworkAppliancePrefixesDelegatedStaticRequest extends SpeakeasyBase {
    requestBody: CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
    networkId: string;
}
export declare class CreateNetworkAppliancePrefixesDelegatedStaticResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject?: Record<string, any>;
}
