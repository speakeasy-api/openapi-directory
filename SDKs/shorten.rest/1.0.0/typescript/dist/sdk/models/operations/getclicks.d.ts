import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClicksSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetClicksRequest extends SpeakeasyBase {
    /**
     * An ID returned by a previous query to continue clicks retrieval (see lastId in response)
     */
    continueFrom?: string;
    /**
     * Number of results to return per request
     */
    limit?: number;
}
export declare class GetClicksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * returns Array of Click models, also returns lastId
     */
    getClicksModel?: shared.GetClicksModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
