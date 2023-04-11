import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    /**
     * alias properties
     */
    createAliasModel: shared.CreateAliasModel;
    /**
     * alias (without `/` at the beginning)
     */
    aliasName?: string;
    /**
     * domain which alias will belong to (string without `http/https` or `/`)
     */
    domainName?: string;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response contains aliasName, domainName and full generated short link
     */
    createAliasResponseModel?: shared.CreateAliasResponseModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
