import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCallFeedbackSummaryServerList: readonly ["https://api.twilio.com"];
export declare class CreateCallFeedbackSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method (`GET` or `POST`) we use to make the request to the `StatusCallback` URL.
 */
export declare enum CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest extends SpeakeasyBase {
    /**
     * Only include feedback given on or before this date. Format is `YYYY-MM-DD` and specified in UTC.
     */
    endDate: Date;
    /**
     * Whether to also include Feedback resources from all subaccounts. `true` includes feedback from all subaccounts and `false`, the default, includes feedback from only the specified account.
     */
    includeSubaccounts?: boolean;
    /**
     * Only include feedback given on or after this date. Format is `YYYY-MM-DD` and specified in UTC.
     */
    startDate: Date;
    /**
     * The URL that we will request when the feedback summary is complete.
     */
    statusCallback?: string;
    /**
     * The HTTP method (`GET` or `POST`) we use to make the request to the `StatusCallback` URL.
     */
    statusCallbackMethod?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum;
}
export declare class CreateCallFeedbackSummaryRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    requestBody?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest;
}
export declare class CreateCallFeedbackSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountCallCallFeedbackSummary?: shared.ApiV2010AccountCallCallFeedbackSummary;
}
