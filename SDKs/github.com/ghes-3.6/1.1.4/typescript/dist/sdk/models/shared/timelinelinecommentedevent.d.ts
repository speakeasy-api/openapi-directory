import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestReviewComment } from "./pullrequestreviewcomment";
/**
 * Timeline Line Commented Event
 */
export declare class TimelineLineCommentedEvent extends SpeakeasyBase {
    comments?: PullRequestReviewComment[];
    event?: string;
    nodeId?: string;
}
