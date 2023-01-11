package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayorV1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PayorAddress address;
    public PayorV1 withAddress(PayorAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsLanguageChoice")
    public Boolean allowsLanguageChoice;
    public PayorV1 withAllowsLanguageChoice(Boolean allowsLanguageChoice) {
        this.allowsLanguageChoice = allowsLanguageChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectiveAlias")
    public String collectiveAlias;
    public PayorV1 withCollectiveAlias(String collectiveAlias) {
        this.collectiveAlias = collectiveAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbaName")
    public String dbaName;
    public PayorV1 withDbaName(String dbaName) {
        this.dbaName = dbaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingAccountAccountName")
    public String fundingAccountAccountName;
    public PayorV1 withFundingAccountAccountName(String fundingAccountAccountName) {
        this.fundingAccountAccountName = fundingAccountAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingAccountAccountNumber")
    public String fundingAccountAccountNumber;
    public PayorV1 withFundingAccountAccountNumber(String fundingAccountAccountNumber) {
        this.fundingAccountAccountNumber = fundingAccountAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingAccountRoutingNumber")
    public String fundingAccountRoutingNumber;
    public PayorV1 withFundingAccountRoutingNumber(String fundingAccountRoutingNumber) {
        this.fundingAccountRoutingNumber = fundingAccountRoutingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includesReports")
    public Boolean includesReports;
    public PayorV1 withIncludesReports(Boolean includesReports) {
        this.includesReports = includesReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kycState")
    public KycStateEnum kycState;
    public PayorV1 withKycState(KycStateEnum kycState) {
        this.kycState = kycState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public PayorV1LanguageEnum language;
    public PayorV1 withLanguage(PayorV1LanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualLockout")
    public Boolean manualLockout;
    public PayorV1 withManualLockout(Boolean manualLockout) {
        this.manualLockout = manualLockout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxMasterPayorAdmins")
    public Long maxMasterPayorAdmins;
    public PayorV1 withMaxMasterPayorAdmins(Long maxMasterPayorAdmins) {
        this.maxMasterPayorAdmins = maxMasterPayorAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeGracePeriodDays")
    public Long payeeGracePeriodDays;
    public PayorV1 withPayeeGracePeriodDays(Long payeeGracePeriodDays) {
        this.payeeGracePeriodDays = payeeGracePeriodDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeGracePeriodProcessingEnabled")
    public Boolean payeeGracePeriodProcessingEnabled;
    public PayorV1 withPayeeGracePeriodProcessingEnabled(Boolean payeeGracePeriodProcessingEnabled) {
        this.payeeGracePeriodProcessingEnabled = payeeGracePeriodProcessingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public PayorV1 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonProperty("payorName")
    public String payorName;
    public PayorV1 withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactEmail")
    public String primaryContactEmail;
    public PayorV1 withPrimaryContactEmail(String primaryContactEmail) {
        this.primaryContactEmail = primaryContactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactName")
    public String primaryContactName;
    public PayorV1 withPrimaryContactName(String primaryContactName) {
        this.primaryContactName = primaryContactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactPhone")
    public String primaryContactPhone;
    public PayorV1 withPrimaryContactPhone(String primaryContactPhone) {
        this.primaryContactPhone = primaryContactPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reminderEmailsOptOut")
    public Boolean reminderEmailsOptOut;
    public PayorV1 withReminderEmailsOptOut(Boolean reminderEmailsOptOut) {
        this.reminderEmailsOptOut = reminderEmailsOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportContact")
    public String supportContact;
    public PayorV1 withSupportContact(String supportContact) {
        this.supportContact = supportContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissionTypes")
    public TransmissionTypes transmissionTypes;
    public PayorV1 withTransmissionTypes(TransmissionTypes transmissionTypes) {
        this.transmissionTypes = transmissionTypes;
        return this;
    }
}