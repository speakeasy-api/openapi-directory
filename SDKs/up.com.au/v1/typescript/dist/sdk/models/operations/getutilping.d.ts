import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUtilPingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Authorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Successful Response
     */
    pingResponse?: shared.PingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
