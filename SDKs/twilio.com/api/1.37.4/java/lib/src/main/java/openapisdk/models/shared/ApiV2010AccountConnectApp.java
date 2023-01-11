package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountConnectApp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountConnectApp withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorize_redirect_url")
    public String authorizeRedirectUrl;
    public ApiV2010AccountConnectApp withAuthorizeRedirectUrl(String authorizeRedirectUrl) {
        this.authorizeRedirectUrl = authorizeRedirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public ApiV2010AccountConnectApp withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deauthorize_callback_method")
    public ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum deauthorizeCallbackMethod;
    public ApiV2010AccountConnectApp withDeauthorizeCallbackMethod(ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum deauthorizeCallbackMethod) {
        this.deauthorizeCallbackMethod = deauthorizeCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deauthorize_callback_url")
    public String deauthorizeCallbackUrl;
    public ApiV2010AccountConnectApp withDeauthorizeCallbackUrl(String deauthorizeCallbackUrl) {
        this.deauthorizeCallbackUrl = deauthorizeCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiV2010AccountConnectApp withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountConnectApp withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage_url")
    public String homepageUrl;
    public ApiV2010AccountConnectApp withHomepageUrl(String homepageUrl) {
        this.homepageUrl = homepageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public ConnectAppEnumPermissionEnum[] permissions;
    public ApiV2010AccountConnectApp withPermissions(ConnectAppEnumPermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountConnectApp withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountConnectApp withUri(String uri) {
        this.uri = uri;
        return this;
    }
}