import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    oAuth?: string;
}
export declare class DeleteRequest extends SpeakeasyBase {
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
    vectaraDeleteDocumentRequest: shared.VectaraDeleteDocumentRequest;
}
export declare class DeleteResponse extends SpeakeasyBase {
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
    vectaraDeleteDocumentResponse?: Record<string, any>;
}
