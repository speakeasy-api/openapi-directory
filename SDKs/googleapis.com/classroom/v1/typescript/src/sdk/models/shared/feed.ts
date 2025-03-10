/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CourseRosterChangesInfo } from "./courserosterchangesinfo";
import { CourseWorkChangesInfo } from "./courseworkchangesinfo";
import { Expose, Type } from "class-transformer";

/**
 * The type of feed.
 */
export enum FeedFeedTypeEnum {
  FeedTypeUnspecified = "FEED_TYPE_UNSPECIFIED",
  DomainRosterChanges = "DOMAIN_ROSTER_CHANGES",
  CourseRosterChanges = "COURSE_ROSTER_CHANGES",
  CourseWorkChanges = "COURSE_WORK_CHANGES",
}

/**
 * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
 */
export class Feed extends SpeakeasyBase {
  /**
   * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "courseRosterChangesInfo" })
  @Type(() => CourseRosterChangesInfo)
  courseRosterChangesInfo?: CourseRosterChangesInfo;

  /**
   * Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "courseWorkChangesInfo" })
  @Type(() => CourseWorkChangesInfo)
  courseWorkChangesInfo?: CourseWorkChangesInfo;

  /**
   * The type of feed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "feedType" })
  feedType?: FeedFeedTypeEnum;
}
