import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Status } from "./status";
/**
 * Admin-level information about a filed report.
 *
 * @see {@link https://docs.joinmastodon.org/entities/admin-report/}
 */
export declare class AdminReport extends SpeakeasyBase {
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    account?: Account;
    /**
     * The action taken to resolve this report. Enumerable oneOf.
     */
    actionTaken?: string;
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    assignedAccount?: Account;
    /**
     * An optional reason for reporting.
     */
    comment?: string;
    /**
     * The time the report was filed.
     */
    createdAt?: Date;
    /**
     * The ID of the report in the database. Cast from an integer, but not guaranteed to be a number.
     */
    id?: string;
    /**
     * Statuses attached to the report, for context.
     */
    statuses?: Status[];
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    targetAccount?: Account;
    /**
     * The time of last action on this report.
     */
    updatedAt?: Date;
}
