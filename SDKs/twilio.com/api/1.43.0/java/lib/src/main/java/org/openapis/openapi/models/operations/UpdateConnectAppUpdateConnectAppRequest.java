/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateConnectAppUpdateConnectAppRequest {
    /**
     * The URL to redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
     */
    @SpeakeasyMetadata("form:name=AuthorizeRedirectUrl")
    public String authorizeRedirectUrl;

    public UpdateConnectAppUpdateConnectAppRequest withAuthorizeRedirectUrl(String authorizeRedirectUrl) {
        this.authorizeRedirectUrl = authorizeRedirectUrl;
        return this;
    }
    
    /**
     * The company name to set for the Connect App.
     */
    @SpeakeasyMetadata("form:name=CompanyName")
    public String companyName;

    public UpdateConnectAppUpdateConnectAppRequest withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    
    /**
     * The HTTP method to use when calling `deauthorize_callback_url`.
     */
    @SpeakeasyMetadata("form:name=DeauthorizeCallbackMethod")
    public UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum deauthorizeCallbackMethod;

    public UpdateConnectAppUpdateConnectAppRequest withDeauthorizeCallbackMethod(UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum deauthorizeCallbackMethod) {
        this.deauthorizeCallbackMethod = deauthorizeCallbackMethod;
        return this;
    }
    
    /**
     * The URL to call using the `deauthorize_callback_method` to de-authorize the Connect App.
     */
    @SpeakeasyMetadata("form:name=DeauthorizeCallbackUrl")
    public String deauthorizeCallbackUrl;

    public UpdateConnectAppUpdateConnectAppRequest withDeauthorizeCallbackUrl(String deauthorizeCallbackUrl) {
        this.deauthorizeCallbackUrl = deauthorizeCallbackUrl;
        return this;
    }
    
    /**
     * A description of the Connect App.
     */
    @SpeakeasyMetadata("form:name=Description")
    public String description;

    public UpdateConnectAppUpdateConnectAppRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;

    public UpdateConnectAppUpdateConnectAppRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    
    /**
     * A public URL where users can obtain more information about this Connect App.
     */
    @SpeakeasyMetadata("form:name=HomepageUrl")
    public String homepageUrl;

    public UpdateConnectAppUpdateConnectAppRequest withHomepageUrl(String homepageUrl) {
        this.homepageUrl = homepageUrl;
        return this;
    }
    
    /**
     * A comma-separated list of the permissions you will request from the users of this ConnectApp.  Can include: `get-all` and `post-all`.
     */
    @SpeakeasyMetadata("form:name=Permissions")
    public org.openapis.openapi.models.shared.ConnectAppEnumPermissionEnum[] permissions;

    public UpdateConnectAppUpdateConnectAppRequest withPermissions(org.openapis.openapi.models.shared.ConnectAppEnumPermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    
    public UpdateConnectAppUpdateConnectAppRequest(){}
}
