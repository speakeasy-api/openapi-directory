import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendFeedbackRequestBody extends SpeakeasyBase {
    /**
     * The message.
     */
    message: string;
    /**
     * Extra information set by the client that may be useful to contextualize the feedback (eg. operating system details, browser details, app details, device details).
     *
     * @remarks
     *
     */
    meta?: string;
    /**
     * The subject.
     */
    subject: string;
}
export declare class SendFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
