import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPodcastAudienceRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Podcast id.
     */
    id: string;
}
export declare class GetPodcastAudienceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    podcastAudienceResponse?: shared.PodcastAudienceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
