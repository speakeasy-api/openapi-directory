import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendFeedbackSecurity extends SpeakeasyBase {
    httpBearer: string;
}
export declare class SendFeedbackRequest extends SpeakeasyBase {
    feedback: shared.Feedback;
    deployment: string;
    namespace: string;
}
export declare class SendFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful response.
     */
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
