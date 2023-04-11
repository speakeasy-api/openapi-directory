import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Key of MappingJob for which to get possible values.
 */
export declare enum GetMappingValuesKeyKeyEnum {
    IdType = "idType",
    ExchCode = "exchCode",
    MicCode = "micCode",
    Currency = "currency",
    MarketSecDes = "marketSecDes",
    SecurityType = "securityType",
    SecurityType2 = "securityType2"
}
export declare class GetMappingValuesKeyRequest extends SpeakeasyBase {
    /**
     * Key of MappingJob for which to get possible values.
     */
    key: GetMappingValuesKeyKeyEnum;
}
/**
 * The list of values.
 */
export declare class GetMappingValuesKey200ApplicationJSON extends SpeakeasyBase {
    values?: string[];
}
export declare class GetMappingValuesKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The list of values.
     */
    getMappingValuesKey200ApplicationJSONObject?: GetMappingValuesKey200ApplicationJSON;
    /**
     * Invalid request (key).
     */
    getMappingValuesKey400WildcardString?: string;
    /**
     * Internal server error.
     */
    getMappingValuesKey500WildcardString?: string;
}
