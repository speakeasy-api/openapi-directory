import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCuratedPodcastsRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Page number of curated lists.
     */
    page?: number;
}
export declare class GetCuratedPodcastsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getCuratedPodcastsResponse?: shared.GetCuratedPodcastsResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
