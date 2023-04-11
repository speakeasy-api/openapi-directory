import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class FaxV1FaxFaxMedia extends SpeakeasyBase {
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string;
    /**
     * The content type of the stored fax media
     */
    contentType?: string;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date;
    /**
     * The SID of the fax the FaxMedia resource is associated with
     */
    faxSid?: string;
    /**
     * The unique string that identifies the resource
     */
    sid?: string;
    /**
     * The absolute URL of the FaxMedia resource
     */
    url?: string;
}
