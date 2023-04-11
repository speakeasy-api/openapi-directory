import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class MicrovisorV1Device extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * Information about the target App and the App reported by this Device. Contains the properties `target_sid`, `date_targeted`, `update_status` (one of `up-to-date`, `pending` and `error`), `update_error_code`, `reported_sid` and `date_reported`.
     */
    app?: any;
    /**
     * The date that this Device was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date that this Device was last updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The absolute URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * Object specifying whether application logging is enabled for this Device. Contains the properties `enabled` and `date_expires`.
     */
    logging?: any;
    /**
     * A 34-character string that uniquely identifies this Device.
     */
    sid?: string;
    /**
     * A developer-defined string that uniquely identifies the Device. This value must be unique for all Devices on this Account. The `unique_name` value may be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
