import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class UpdateConnectAppSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method to use when calling `deauthorize_callback_url`.
 */
export declare enum UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateConnectAppUpdateConnectAppRequest extends SpeakeasyBase {
    /**
     * The URL to redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
     */
    authorizeRedirectUrl?: string;
    /**
     * The company name to set for the Connect App.
     */
    companyName?: string;
    /**
     * The HTTP method to use when calling `deauthorize_callback_url`.
     */
    deauthorizeCallbackMethod?: UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum;
    /**
     * The URL to call using the `deauthorize_callback_method` to de-authorize the Connect App.
     */
    deauthorizeCallbackUrl?: string;
    /**
     * A description of the Connect App.
     */
    description?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * A public URL where users can obtain more information about this Connect App.
     */
    homepageUrl?: string;
    /**
     * A comma-separated list of the permissions you will request from the users of this ConnectApp.  Can include: `get-all` and `post-all`.
     */
    permissions?: shared.ConnectAppEnumPermissionEnum[];
}
export declare class UpdateConnectAppRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resources to update.
     */
    accountSid: string;
    requestBody?: UpdateConnectAppUpdateConnectAppRequest;
    /**
     * The Twilio-provided string that uniquely identifies the ConnectApp resource to update.
     */
    sid: string;
}
export declare class UpdateConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConnectApp?: shared.ApiV2010AccountConnectApp;
}
