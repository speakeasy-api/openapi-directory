import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetAliasRequest extends SpeakeasyBase {
    /**
     * alias value (without `/` at the beginning)
     */
    aliasName: string;
    /**
     * domain which alias belongs to (string without `http/https` or `/`)
     */
    domainName?: string;
}
export declare class GetAliasResponse extends SpeakeasyBase {
    /**
     * Alias model or **null**
     */
    aliasModel?: shared.AliasModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
