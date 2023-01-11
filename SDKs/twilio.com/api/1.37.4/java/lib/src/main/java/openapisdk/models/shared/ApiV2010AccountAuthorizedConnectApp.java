package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountAuthorizedConnectApp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountAuthorizedConnectApp withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_app_company_name")
    public String connectAppCompanyName;
    public ApiV2010AccountAuthorizedConnectApp withConnectAppCompanyName(String connectAppCompanyName) {
        this.connectAppCompanyName = connectAppCompanyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_app_description")
    public String connectAppDescription;
    public ApiV2010AccountAuthorizedConnectApp withConnectAppDescription(String connectAppDescription) {
        this.connectAppDescription = connectAppDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_app_friendly_name")
    public String connectAppFriendlyName;
    public ApiV2010AccountAuthorizedConnectApp withConnectAppFriendlyName(String connectAppFriendlyName) {
        this.connectAppFriendlyName = connectAppFriendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_app_homepage_url")
    public String connectAppHomepageUrl;
    public ApiV2010AccountAuthorizedConnectApp withConnectAppHomepageUrl(String connectAppHomepageUrl) {
        this.connectAppHomepageUrl = connectAppHomepageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_app_sid")
    public String connectAppSid;
    public ApiV2010AccountAuthorizedConnectApp withConnectAppSid(String connectAppSid) {
        this.connectAppSid = connectAppSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountAuthorizedConnectApp withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountAuthorizedConnectApp withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public AuthorizedConnectAppEnumPermissionEnum[] permissions;
    public ApiV2010AccountAuthorizedConnectApp withPermissions(AuthorizedConnectAppEnumPermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountAuthorizedConnectApp withUri(String uri) {
        this.uri = uri;
        return this;
    }
}