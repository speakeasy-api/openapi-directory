package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2TenantInput
 * A Tenant contains configuration for the tenant in a multi-tenant project.
**/
public class GoogleCloudIdentitytoolkitAdminV2TenantInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowPasswordSignup")
    public Boolean allowPasswordSignup;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withAllowPasswordSignup(Boolean allowPasswordSignup) {
        this.allowPasswordSignup = allowPasswordSignup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autodeleteAnonymousUsers")
    public Boolean autodeleteAnonymousUsers;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withAutodeleteAnonymousUsers(Boolean autodeleteAnonymousUsers) {
        this.autodeleteAnonymousUsers = autodeleteAnonymousUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig client;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withClient(GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableAuth")
    public Boolean disableAuth;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withDisableAuth(Boolean disableAuth) {
        this.disableAuth = disableAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailPrivacyConfig")
    public GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig emailPrivacyConfig;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withEmailPrivacyConfig(GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig emailPrivacyConfig) {
        this.emailPrivacyConfig = emailPrivacyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAnonymousUser")
    public Boolean enableAnonymousUser;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withEnableAnonymousUser(Boolean enableAnonymousUser) {
        this.enableAnonymousUser = enableAnonymousUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableEmailLinkSignin")
    public Boolean enableEmailLinkSignin;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withEnableEmailLinkSignin(Boolean enableEmailLinkSignin) {
        this.enableEmailLinkSignin = enableEmailLinkSignin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritance")
    public GoogleCloudIdentitytoolkitAdminV2Inheritance inheritance;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withInheritance(GoogleCloudIdentitytoolkitAdminV2Inheritance inheritance) {
        this.inheritance = inheritance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaConfig")
    public GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig mfaConfig;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withMfaConfig(GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig mfaConfig) {
        this.mfaConfig = mfaConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoring")
    public GoogleCloudIdentitytoolkitAdminV2MonitoringConfig monitoring;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withMonitoring(GoogleCloudIdentitytoolkitAdminV2MonitoringConfig monitoring) {
        this.monitoring = monitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smsRegionConfig")
    public GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig smsRegionConfig;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withSmsRegionConfig(GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig smsRegionConfig) {
        this.smsRegionConfig = smsRegionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testPhoneNumbers")
    public java.util.Map<String, String> testPhoneNumbers;
    public GoogleCloudIdentitytoolkitAdminV2TenantInput withTestPhoneNumbers(java.util.Map<String, String> testPhoneNumbers) {
        this.testPhoneNumbers = testPhoneNumbers;
        return this;
    }
}