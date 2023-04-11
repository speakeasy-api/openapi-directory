import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateAliasRequest extends SpeakeasyBase {
    /**
     * alias properties you wish to be updated
     */
    createAliasModel: shared.CreateAliasModel;
    /**
     * alias (without `/` at the beginning)
     */
    aliasName: string;
    /**
     * domain which alias belongs to (string without `http/https` or `/`)
     */
    domainName?: string;
}
export declare class UpdateAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
