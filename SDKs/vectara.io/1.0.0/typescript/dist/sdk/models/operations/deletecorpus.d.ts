import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCorpusRequest extends SpeakeasyBase {
    adminDeleteCorpusRequest: shared.AdminDeleteCorpusRequest;
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
}
export declare class DeleteCorpusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response.
     */
    adminDeleteCorpusResponse?: shared.AdminDeleteCorpusResponse;
    /**
     * An unexpected error response.
     */
    googlerpcStatus?: shared.GooglerpcStatus;
}
