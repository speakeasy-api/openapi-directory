import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAliasesSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetAliasesRequest extends SpeakeasyBase {
    /**
     * An ID returned by a previous query to continue aliases retrieval (see lastId in response)
     */
    continueFrom?: string;
    /**
     * The domain name to get the aliases for (string without `http/https` or `/`)
     */
    domainName?: string;
    /**
     * Number of results to return per request
     */
    limit?: number;
}
export declare class GetAliasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * returns Array of aliases with lastId
     */
    getAliasesModel?: shared.GetAliasesModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
