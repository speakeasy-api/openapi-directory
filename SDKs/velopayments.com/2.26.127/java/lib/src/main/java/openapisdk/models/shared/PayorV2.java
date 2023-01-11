package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayorV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PayorAddressV2 address;
    public PayorV2 withAddress(PayorAddressV2 address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsLanguageChoice")
    public Boolean allowsLanguageChoice;
    public PayorV2 withAllowsLanguageChoice(Boolean allowsLanguageChoice) {
        this.allowsLanguageChoice = allowsLanguageChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectiveAlias")
    public String collectiveAlias;
    public PayorV2 withCollectiveAlias(String collectiveAlias) {
        this.collectiveAlias = collectiveAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbaName")
    public String dbaName;
    public PayorV2 withDbaName(String dbaName) {
        this.dbaName = dbaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includesReports")
    public Boolean includesReports;
    public PayorV2 withIncludesReports(Boolean includesReports) {
        this.includesReports = includesReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kycState")
    public KycStateEnum kycState;
    public PayorV2 withKycState(KycStateEnum kycState) {
        this.kycState = kycState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public PayorV2LanguageEnum language;
    public PayorV2 withLanguage(PayorV2LanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualLockout")
    public Boolean manualLockout;
    public PayorV2 withManualLockout(Boolean manualLockout) {
        this.manualLockout = manualLockout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxMasterPayorAdmins")
    public Long maxMasterPayorAdmins;
    public PayorV2 withMaxMasterPayorAdmins(Long maxMasterPayorAdmins) {
        this.maxMasterPayorAdmins = maxMasterPayorAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeGracePeriodDays")
    public Long payeeGracePeriodDays;
    public PayorV2 withPayeeGracePeriodDays(Long payeeGracePeriodDays) {
        this.payeeGracePeriodDays = payeeGracePeriodDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeGracePeriodProcessingEnabled")
    public Boolean payeeGracePeriodProcessingEnabled;
    public PayorV2 withPayeeGracePeriodProcessingEnabled(Boolean payeeGracePeriodProcessingEnabled) {
        this.payeeGracePeriodProcessingEnabled = payeeGracePeriodProcessingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentRails")
    public PaymentRailsEnum paymentRails;
    public PayorV2 withPaymentRails(PaymentRailsEnum paymentRails) {
        this.paymentRails = paymentRails;
        return this;
    }
    @JsonProperty("payorId")
    public String payorId;
    public PayorV2 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonProperty("payorName")
    public String payorName;
    public PayorV2 withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorXid")
    public String payorXid;
    public PayorV2 withPayorXid(String payorXid) {
        this.payorXid = payorXid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactEmail")
    public String primaryContactEmail;
    public PayorV2 withPrimaryContactEmail(String primaryContactEmail) {
        this.primaryContactEmail = primaryContactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactName")
    public String primaryContactName;
    public PayorV2 withPrimaryContactName(String primaryContactName) {
        this.primaryContactName = primaryContactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactPhone")
    public String primaryContactPhone;
    public PayorV2 withPrimaryContactPhone(String primaryContactPhone) {
        this.primaryContactPhone = primaryContactPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reminderEmailsOptOut")
    public Boolean reminderEmailsOptOut;
    public PayorV2 withReminderEmailsOptOut(Boolean reminderEmailsOptOut) {
        this.reminderEmailsOptOut = reminderEmailsOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemIds")
    public String[] remoteSystemIds;
    public PayorV2 withRemoteSystemIds(String[] remoteSystemIds) {
        this.remoteSystemIds = remoteSystemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportContact")
    public String supportContact;
    public PayorV2 withSupportContact(String supportContact) {
        this.supportContact = supportContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissionTypes")
    public TransmissionTypes2 transmissionTypes;
    public PayorV2 withTransmissionTypes(TransmissionTypes2 transmissionTypes) {
        this.transmissionTypes = transmissionTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wuCustomerId")
    public String wuCustomerId;
    public PayorV2 withWuCustomerId(String wuCustomerId) {
        this.wuCustomerId = wuCustomerId;
        return this;
    }
}