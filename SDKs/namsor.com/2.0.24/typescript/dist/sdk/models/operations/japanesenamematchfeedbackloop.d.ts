import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JapaneseNameMatchFeedbackLoopSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class JapaneseNameMatchFeedbackLoopRequest extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseName: string;
    japaneseSurnameLatin: string;
}
export declare class JapaneseNameMatchFeedbackLoopResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    feedbackLoopOut?: shared.FeedbackLoopOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
