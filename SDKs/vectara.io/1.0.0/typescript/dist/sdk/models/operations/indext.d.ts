import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IndexSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    oAuth?: string;
}
export declare class IndexRequest extends SpeakeasyBase {
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
    vectaraIndexDocumentRequest: shared.VectaraIndexDocumentRequest;
}
export declare class IndexResponse extends SpeakeasyBase {
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
    vectaraIndexDocumentResponse?: shared.VectaraIndexDocumentResponse;
}
