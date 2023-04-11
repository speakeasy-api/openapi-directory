import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ApiV2010AccountKey extends SpeakeasyBase {
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The unique string that that we created to identify the Key resource.
     */
    sid?: string;
}
