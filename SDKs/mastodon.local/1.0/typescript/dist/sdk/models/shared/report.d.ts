import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
export declare enum ReportCategoryEnum {
    Other = "other",
    Spam = "spam",
    Violation = "violation"
}
/**
 * Reports filed against users and/or statuses, to be taken action on by moderators.
 *
 * @see {@link https://docs.joinmastodon.org/entities/report/}
 */
export declare class Report extends SpeakeasyBase {
    actionTaken?: boolean;
    actionTakenAt?: Date;
    category?: ReportCategoryEnum;
    comment?: string;
    createdAt?: Date;
    forwarded?: boolean;
    id?: string;
    ruleIds?: number[];
    statusIds?: number[];
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    targetAccount?: Account;
}
