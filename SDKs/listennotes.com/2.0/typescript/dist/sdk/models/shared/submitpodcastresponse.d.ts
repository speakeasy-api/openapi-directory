import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";
/**
 * The status of this submission.
 */
export declare enum SubmitPodcastResponseStatusEnum {
    Found = "found",
    InReview = "in review",
    Rejected = "rejected"
}
/**
 * OK
 */
export declare class SubmitPodcastResponse extends SpeakeasyBase {
    podcast: PodcastMinimum;
    /**
     * The status of this submission.
     */
    status: SubmitPodcastResponseStatusEnum;
}
