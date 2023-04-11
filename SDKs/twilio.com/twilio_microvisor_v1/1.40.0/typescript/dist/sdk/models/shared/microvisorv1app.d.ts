import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class MicrovisorV1App extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The date that this App was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date that this App was last updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * App manifest hash represented as `hash_algorithm:hash_value`.
     */
    hash?: string;
    links?: Record<string, any>;
    /**
     * A 34-character string that uniquely identifies this App.
     */
    sid?: string;
    /**
     * A developer-defined string that uniquely identifies the App. This value must be unique for all Apps on this Account. The `unique_name` value may be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
