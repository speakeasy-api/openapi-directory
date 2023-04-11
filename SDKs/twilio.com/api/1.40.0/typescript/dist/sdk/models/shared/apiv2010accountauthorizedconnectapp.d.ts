import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedConnectAppEnumPermissionEnum } from "./authorizedconnectappenumpermissionenum";
/**
 * OK
 */
export declare class ApiV2010AccountAuthorizedConnectApp extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AuthorizedConnectApp resource.
     */
    accountSid?: string;
    /**
     * The company name set for the Connect App.
     */
    connectAppCompanyName?: string;
    /**
     * A detailed description of the Connect App.
     */
    connectAppDescription?: string;
    /**
     * The name of the Connect App.
     */
    connectAppFriendlyName?: string;
    /**
     * The public URL for the Connect App.
     */
    connectAppHomepageUrl?: string;
    /**
     * The SID that we assigned to the Connect App.
     */
    connectAppSid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The set of permissions that you authorized for the Connect App.  Can be: `get-all` or `post-all`.
     */
    permissions?: AuthorizedConnectAppEnumPermissionEnum[];
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
