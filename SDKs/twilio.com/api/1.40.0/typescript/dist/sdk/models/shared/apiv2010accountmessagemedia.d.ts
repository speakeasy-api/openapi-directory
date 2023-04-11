import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ApiV2010AccountMessageMedia extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Media resource.
     */
    accountSid?: string;
    /**
     * The default [mime-type](https://en.wikipedia.org/wiki/Internet_media_type) of the media, for example `image/jpeg`, `image/png`, or `image/gif`
     */
    contentType?: string;
    /**
     * The date and time in GMT that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The SID of the resource that created the media.
     */
    parentSid?: string;
    /**
     * The unique string that that we created to identify this Media resource.
     */
    sid?: string;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
