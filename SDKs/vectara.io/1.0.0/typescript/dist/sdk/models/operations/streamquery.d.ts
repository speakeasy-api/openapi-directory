import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StreamQuerySecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    oAuth?: string;
}
export declare class StreamQueryRequest extends SpeakeasyBase {
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
    servingBatchQueryRequest: shared.ServingBatchQueryRequest;
}
/**
 * A successful response.(streaming responses)
 */
export declare class StreamQueryStreamResultOfServingResponseSet extends SpeakeasyBase {
    error?: shared.GooglerpcStatus;
    result?: shared.ServingResponseSet;
}
export declare class StreamQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response.(streaming responses)
     */
    streamResultOfServingResponseSet?: StreamQueryStreamResultOfServingResponseSet;
    /**
     * An unexpected error response.
     */
    googlerpcStatus?: shared.GooglerpcStatus;
}
