import { SpeakeasyBase } from "../../../internal/utils";
import { CourseRosterChangesInfo } from "./courserosterchangesinfo";
import { CourseWorkChangesInfo } from "./courseworkchangesinfo";
/**
 * The type of feed.
 */
export declare enum FeedFeedTypeEnum {
    FeedTypeUnspecified = "FEED_TYPE_UNSPECIFIED",
    DomainRosterChanges = "DOMAIN_ROSTER_CHANGES",
    CourseRosterChanges = "COURSE_ROSTER_CHANGES",
    CourseWorkChanges = "COURSE_WORK_CHANGES"
}
/**
 * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
 */
export declare class Feed extends SpeakeasyBase {
    /**
     * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
     */
    courseRosterChangesInfo?: CourseRosterChangesInfo;
    /**
     * Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
     */
    courseWorkChangesInfo?: CourseWorkChangesInfo;
    /**
     * The type of feed.
     */
    feedType?: FeedFeedTypeEnum;
}
