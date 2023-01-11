package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectAppUpdateConnectAppRequest {
    @SpeakeasyMetadata("form:name=AuthorizeRedirectUrl")
    public String authorizeRedirectUrl;
    public UpdateConnectAppUpdateConnectAppRequest withAuthorizeRedirectUrl(String authorizeRedirectUrl) {
        this.authorizeRedirectUrl = authorizeRedirectUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=CompanyName")
    public String companyName;
    public UpdateConnectAppUpdateConnectAppRequest withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeauthorizeCallbackMethod")
    public UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum deauthorizeCallbackMethod;
    public UpdateConnectAppUpdateConnectAppRequest withDeauthorizeCallbackMethod(UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum deauthorizeCallbackMethod) {
        this.deauthorizeCallbackMethod = deauthorizeCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeauthorizeCallbackUrl")
    public String deauthorizeCallbackUrl;
    public UpdateConnectAppUpdateConnectAppRequest withDeauthorizeCallbackUrl(String deauthorizeCallbackUrl) {
        this.deauthorizeCallbackUrl = deauthorizeCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public UpdateConnectAppUpdateConnectAppRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateConnectAppUpdateConnectAppRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=HomepageUrl")
    public String homepageUrl;
    public UpdateConnectAppUpdateConnectAppRequest withHomepageUrl(String homepageUrl) {
        this.homepageUrl = homepageUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Permissions")
    public openapisdk.models.shared.ConnectAppEnumPermissionEnum[] permissions;
    public UpdateConnectAppUpdateConnectAppRequest withPermissions(openapisdk.models.shared.ConnectAppEnumPermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
}