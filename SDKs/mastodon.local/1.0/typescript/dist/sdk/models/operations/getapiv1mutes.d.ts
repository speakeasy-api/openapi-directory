import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1MutesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1MutesRequest extends SpeakeasyBase {
    limit?: string;
    maxId?: string;
    sinceId?: string;
}
export declare class GetApiV1MutesResponse extends SpeakeasyBase {
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
