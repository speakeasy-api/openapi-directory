import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetCorpusRequest extends SpeakeasyBase {
    adminResetCorpusRequest: shared.AdminResetCorpusRequest;
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
}
export declare class ResetCorpusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response.
     */
    adminResetCorpusResponse?: shared.AdminResetCorpusResponse;
    /**
     * An unexpected error response.
     */
    googlerpcStatus?: shared.GooglerpcStatus;
}
