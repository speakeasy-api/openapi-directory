import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLinkInput } from "./googleanalyticsadminv1alphauserlink";
/**
 * Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the "primary" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the "primary" email address. As a result, the input and output email address for this request may differ.
 */
export declare class GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput extends SpeakeasyBase {
    /**
     * Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
     */
    notifyNewUser?: boolean;
    /**
     * Required. Example format: accounts/1234
     */
    parent?: string;
    /**
     * A resource message representing a user's permissions on an Account or Property resource.
     */
    userLink?: GoogleAnalyticsAdminV1alphaUserLinkInput;
}
