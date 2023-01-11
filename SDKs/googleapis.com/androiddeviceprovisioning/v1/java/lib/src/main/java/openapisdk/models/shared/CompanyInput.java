package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompanyInput
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
**/
public class CompanyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminEmails")
    public String[] adminEmails;
    public CompanyInput withAdminEmails(String[] adminEmails) {
        this.adminEmails = adminEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public CompanyInput withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleWorkspaceAccount")
    public GoogleWorkspaceAccountInput googleWorkspaceAccount;
    public CompanyInput withGoogleWorkspaceAccount(GoogleWorkspaceAccountInput googleWorkspaceAccount) {
        this.googleWorkspaceAccount = googleWorkspaceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public CompanyInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerEmails")
    public String[] ownerEmails;
    public CompanyInput withOwnerEmails(String[] ownerEmails) {
        this.ownerEmails = ownerEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipWelcomeEmail")
    public Boolean skipWelcomeEmail;
    public CompanyInput withSkipWelcomeEmail(Boolean skipWelcomeEmail) {
        this.skipWelcomeEmail = skipWelcomeEmail;
        return this;
    }
}