import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuerySecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    oAuth?: string;
}
export declare class QueryRequest extends SpeakeasyBase {
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
    servingBatchQueryRequest: shared.ServingBatchQueryRequest;
}
export declare class QueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An unexpected error response.
     */
    googlerpcStatus?: shared.GooglerpcStatus;
    /**
     * A successful response.
     */
    servingBatchQueryResponse?: shared.ServingBatchQueryResponse;
}
