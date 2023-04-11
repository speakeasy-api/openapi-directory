import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ContentV1ContentApprovalFetch extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
     */
    accountSid?: string;
    /**
     * The unique string that that we created to identify the Content resource.
     */
    sid?: string;
    /**
     * The URL of the resource, relative to `https://content.twilio.com`.
     */
    url?: string;
    /**
     * Contains the whatsapp approval information for the Content resource, with fields such as approval status, rejection reason, and category, amongst others.
     */
    whatsapp?: any;
}
