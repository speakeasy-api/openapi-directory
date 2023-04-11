import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
/**
 * The default post privacy to be used for new statuses.
 */
export declare enum SourcePrivacyEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private",
    Direct = "direct"
}
/**
 * Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account.
 *
 * @see {@link https://docs.joinmastodon.org/entities/source/}
 */
export declare class Source extends SpeakeasyBase {
    /**
     * Metadata about the account.
     */
    fields?: Field[];
    /**
     * The number of pending follow requests
     */
    followRequestsCount?: number;
    /**
     * The default posting language for new statuses, ISO 639-1 language two-letter code.
     */
    language?: string;
    /**
     * Profile bio
     */
    note?: string;
    /**
     * The default post privacy to be used for new statuses.
     */
    privacy?: SourcePrivacyEnum;
    /**
     * Whether new statuses should be marked sensitive by default.
     */
    sensitive?: boolean;
}
