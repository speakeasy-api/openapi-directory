import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1DomainBlocksSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1DomainBlocksRequest extends SpeakeasyBase {
    limit?: number;
    maxId?: string;
    sinceId?: string;
}
export declare class GetApiV1DomainBlocksResponse extends SpeakeasyBase {
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
    getApiV1DomainBlocks200ApplicationJSONStrings?: string[];
}
