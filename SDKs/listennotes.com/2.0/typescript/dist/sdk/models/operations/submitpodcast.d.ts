import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitPodcastRequest extends SpeakeasyBase {
    submitPodcastForm: shared.SubmitPodcastForm;
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
}
export declare class SubmitPodcastResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    submitPodcastResponse?: shared.SubmitPodcastResponse;
}
