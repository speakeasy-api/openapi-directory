import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1BlocksSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1BlocksRequest extends SpeakeasyBase {
    limit?: number;
    maxId?: string;
    sinceId?: string;
}
export declare class GetApiV1BlocksResponse extends SpeakeasyBase {
    /**
     * success
     */
    accounts?: shared.Account[];
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
