import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectAppEnumPermissionEnum } from "./connectappenumpermissionenum";
/**
 * The HTTP method we use to call `deauthorize_callback_url`.
 */
export declare enum ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * OK
 */
export declare class ApiV2010AccountConnectApp extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource.
     */
    accountSid?: string;
    /**
     * The URL we redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
     */
    authorizeRedirectUrl?: string;
    /**
     * The company name set for the Connect App.
     */
    companyName?: string;
    /**
     * The HTTP method we use to call `deauthorize_callback_url`.
     */
    deauthorizeCallbackMethod?: ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum;
    /**
     * The URL we call using the `deauthorize_callback_method` to de-authorize the Connect App.
     */
    deauthorizeCallbackUrl?: string;
    /**
     * The description of the Connect App.
     */
    description?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The public URL where users can obtain more information about this Connect App.
     */
    homepageUrl?: string;
    /**
     * The set of permissions that your ConnectApp requests.
     */
    permissions?: ConnectAppEnumPermissionEnum[];
    /**
     * The unique string that that we created to identify the ConnectApp resource.
     */
    sid?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
