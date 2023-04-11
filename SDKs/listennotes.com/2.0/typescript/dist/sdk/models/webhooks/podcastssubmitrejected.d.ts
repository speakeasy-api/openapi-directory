import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PodcastsSubmitRejectedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
export declare class PodcastsSubmitRejectedRequestBodyPodcast extends SpeakeasyBase {
    /**
     * RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
     */
    rss?: string;
}
/**
 * Triggered by your request to POST /podcasts/submit, if the podcast submission is rejected.
 */
export declare class PodcastsSubmitRejectedRequestBody extends SpeakeasyBase {
    podcast?: PodcastsSubmitRejectedRequestBodyPodcast;
}
