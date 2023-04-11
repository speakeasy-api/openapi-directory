import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPodcastsInBatchRequest extends SpeakeasyBase {
    getPodcastsInBatchForm?: shared.GetPodcastsInBatchForm;
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
}
export declare class GetPodcastsInBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getPodcastsInBatchResponse?: shared.GetPodcastsInBatchResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
