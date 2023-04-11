import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCorpusRequest extends SpeakeasyBase {
    adminCreateCorpusRequest: shared.AdminCreateCorpusRequest;
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
}
export declare class CreateCorpusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response.
     */
    adminCreateCorpusResponse?: shared.AdminCreateCorpusResponse;
    /**
     * An unexpected error response.
     */
    googlerpcStatus?: shared.GooglerpcStatus;
}
