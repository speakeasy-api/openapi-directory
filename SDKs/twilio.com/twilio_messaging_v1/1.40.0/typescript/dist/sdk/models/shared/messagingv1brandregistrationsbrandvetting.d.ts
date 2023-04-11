import { SpeakeasyBase } from "../../../internal/utils";
import { BrandVettingEnumVettingProviderEnum } from "./brandvettingenumvettingproviderenum";
/**
 * Created
 */
export declare class MessagingV1BrandRegistrationsBrandVetting extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the vetting record.
     */
    accountSid?: string;
    /**
     * The unique string to identify Brand Registration.
     */
    brandSid?: string;
    /**
     * The Twilio SID of the third-party vetting record.
     */
    brandVettingSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The absolute URL of the Brand Vetting resource.
     */
    url?: string;
    /**
     * The type of vetting that has been conducted. One of “STANDARD” (Aegis) or “POLITICAL” (Campaign Verify).
     */
    vettingClass?: string;
    /**
     * The unique identifier of the vetting from the third-party provider.
     */
    vettingId?: string;
    vettingProvider?: BrandVettingEnumVettingProviderEnum;
    /**
     * The status of the import vetting attempt. One of “PENDING,” “SUCCESS,” or “FAILED”.
     */
    vettingStatus?: string;
}
