import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1DomainBlocksSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteApiV1DomainBlocksRequest extends SpeakeasyBase {
    /**
     * Domain to unblock.
     */
    domain: string;
}
export declare class DeleteApiV1DomainBlocksResponse extends SpeakeasyBase {
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
    deleteApiV1DomainBlocks200ApplicationJSONObject?: Record<string, any>;
}
