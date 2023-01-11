package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployerEmployerHmrcSettings
 * The employers' hmrc settings
**/
public class EmployerEmployerHmrcSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountingOfficeRef")
    public String accountingOfficeRef;
    public EmployerEmployerHmrcSettings withAccountingOfficeRef(String accountingOfficeRef) {
        this.accountingOfficeRef = accountingOfficeRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("COTAXRef")
    public String cotaxRef;
    public EmployerEmployerHmrcSettings withCotaxRef(String cotaxRef) {
        this.cotaxRef = cotaxRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactEmail")
    public String contactEmail;
    public EmployerEmployerHmrcSettings withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactFax")
    public String contactFax;
    public EmployerEmployerHmrcSettings withContactFax(String contactFax) {
        this.contactFax = contactFax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactFirstName")
    public String contactFirstName;
    public EmployerEmployerHmrcSettings withContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactLastName")
    public String contactLastName;
    public EmployerEmployerHmrcSettings withContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactTelephone")
    public String contactTelephone;
    public EmployerEmployerHmrcSettings withContactTelephone(String contactTelephone) {
        this.contactTelephone = contactTelephone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmploymentAllowanceOverride")
    public Double employmentAllowanceOverride;
    public EmployerEmployerHmrcSettings withEmploymentAllowanceOverride(Double employmentAllowanceOverride) {
        this.employmentAllowanceOverride = employmentAllowanceOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public EmployerEmployerHmrcSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SAUTR")
    public String sautr;
    public EmployerEmployerHmrcSettings withSautr(String sautr) {
        this.sautr = sautr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sender")
    public EmployerEmployerHmrcSettingsSenderEnum sender;
    public EmployerEmployerHmrcSettings withSender(EmployerEmployerHmrcSettingsSenderEnum sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SenderId")
    public String senderId;
    public EmployerEmployerHmrcSettings withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateAidSector")
    public EmployerEmployerHmrcSettingsStateAidSectorEnum stateAidSector;
    public EmployerEmployerHmrcSettings withStateAidSector(EmployerEmployerHmrcSettingsStateAidSectorEnum stateAidSector) {
        this.stateAidSector = stateAidSector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxOfficeNumber")
    public String taxOfficeNumber;
    public EmployerEmployerHmrcSettings withTaxOfficeNumber(String taxOfficeNumber) {
        this.taxOfficeNumber = taxOfficeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxOfficeReference")
    public String taxOfficeReference;
    public EmployerEmployerHmrcSettings withTaxOfficeReference(String taxOfficeReference) {
        this.taxOfficeReference = taxOfficeReference;
        return this;
    }
}