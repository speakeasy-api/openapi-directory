import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1DomainBlocksSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1DomainBlocksRequestBody extends SpeakeasyBase {
    /**
     * Domain to block.
     */
    domain: string;
}
export declare class PostApiV1DomainBlocksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    postApiV1DomainBlocks200ApplicationJSONObject?: Record<string, any>;
}
