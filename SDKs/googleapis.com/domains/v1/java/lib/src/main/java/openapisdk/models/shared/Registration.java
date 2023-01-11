package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Registration
 * The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
**/
public class Registration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactSettings")
    public ContactSettings contactSettings;
    public Registration withContactSettings(ContactSettings contactSettings) {
        this.contactSettings = contactSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Registration withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsSettings")
    public DnsSettings dnsSettings;
    public Registration withDnsSettings(DnsSettings dnsSettings) {
        this.dnsSettings = dnsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public Registration withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public Registration withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public RegistrationIssuesEnum[] issues;
    public Registration withIssues(RegistrationIssuesEnum[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Registration withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managementSettings")
    public ManagementSettings managementSettings;
    public Registration withManagementSettings(ManagementSettings managementSettings) {
        this.managementSettings = managementSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Registration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingContactSettings")
    public ContactSettings pendingContactSettings;
    public Registration withPendingContactSettings(ContactSettings pendingContactSettings) {
        this.pendingContactSettings = pendingContactSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registerFailureReason")
    public RegistrationRegisterFailureReasonEnum registerFailureReason;
    public Registration withRegisterFailureReason(RegistrationRegisterFailureReasonEnum registerFailureReason) {
        this.registerFailureReason = registerFailureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public RegistrationStateEnum state;
    public Registration withState(RegistrationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedPrivacy")
    public RegistrationSupportedPrivacyEnum[] supportedPrivacy;
    public Registration withSupportedPrivacy(RegistrationSupportedPrivacyEnum[] supportedPrivacy) {
        this.supportedPrivacy = supportedPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferFailureReason")
    public RegistrationTransferFailureReasonEnum transferFailureReason;
    public Registration withTransferFailureReason(RegistrationTransferFailureReasonEnum transferFailureReason) {
        this.transferFailureReason = transferFailureReason;
        return this;
    }
}