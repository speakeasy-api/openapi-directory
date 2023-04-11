import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCallFeedbackSummaryServerList: readonly ["https://api.twilio.com"];
export declare class DeleteCallFeedbackSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCallFeedbackSummaryRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class DeleteCallFeedbackSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
