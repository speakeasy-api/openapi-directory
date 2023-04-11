import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of this podcast deletion request.
 */
export declare enum DeletePodcastResponseStatusEnum {
    Deleted = "deleted",
    InReview = "in review"
}
/**
 * OK
 */
export declare class DeletePodcastResponse extends SpeakeasyBase {
    /**
     * The status of this podcast deletion request.
     */
    status: DeletePodcastResponseStatusEnum;
}
