import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAliasSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteAliasRequest extends SpeakeasyBase {
    /**
     * alias (without `/` at the beginning)
     */
    aliasName: string;
    /**
     * domain which alias belongs to (string without `http/https` or `/`)
     */
    domainName?: string;
}
export declare class DeleteAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
