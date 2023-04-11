import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class AccountsV1AuthTokenPromotion extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
     */
    accountSid?: string;
    /**
     * The promoted Auth Token that must be used to authenticate future API requests.
     */
    authToken?: string;
    /**
     * The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The URI for this resource, relative to `https://accounts.twilio.com`
     */
    url?: string;
}
