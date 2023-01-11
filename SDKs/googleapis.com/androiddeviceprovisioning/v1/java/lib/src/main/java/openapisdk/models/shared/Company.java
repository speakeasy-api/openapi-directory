package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Company
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
**/
public class Company {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminEmails")
    public String[] adminEmails;
    public Company withAdminEmails(String[] adminEmails) {
        this.adminEmails = adminEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyId")
    public String companyId;
    public Company withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public Company withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleWorkspaceAccount")
    public GoogleWorkspaceAccount googleWorkspaceAccount;
    public Company withGoogleWorkspaceAccount(GoogleWorkspaceAccount googleWorkspaceAccount) {
        this.googleWorkspaceAccount = googleWorkspaceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public Company withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Company withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerEmails")
    public String[] ownerEmails;
    public Company withOwnerEmails(String[] ownerEmails) {
        this.ownerEmails = ownerEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipWelcomeEmail")
    public Boolean skipWelcomeEmail;
    public Company withSkipWelcomeEmail(Boolean skipWelcomeEmail) {
        this.skipWelcomeEmail = skipWelcomeEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsStatus")
    public CompanyTermsStatusEnum termsStatus;
    public Company withTermsStatus(CompanyTermsStatusEnum termsStatus) {
        this.termsStatus = termsStatus;
        return this;
    }
}