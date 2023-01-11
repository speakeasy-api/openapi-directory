import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPodcastsInBatchHeaders extends SpeakeasyBase {
    xListenAPIKey: string;
}
export declare class GetPodcastsInBatchRequest extends SpeakeasyBase {
    headers: GetPodcastsInBatchHeaders;
    request?: shared.GetPodcastsInBatchForm;
}
export declare class GetPodcastsInBatchResponse extends SpeakeasyBase {
    contentType: string;
    getPodcastsInBatchResponse?: shared.GetPodcastsInBatchResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
