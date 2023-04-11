import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StatusGetRequest extends SpeakeasyBase {
    /**
     * respose of POST request
     */
    messageId?: string;
}
export declare class StatusGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * same response result will retrun with different status and messageText
     */
    messageStatus?: shared.MessageStatus;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
