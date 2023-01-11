package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SubContractorSubContractor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public SubContractorSubContractorAddress address;
    public SubContractorSubContractor withAddress(SubContractorSubContractorAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankAccount")
    public SubContractorSubContractorBankAccount bankAccount;
    public SubContractorSubContractor withBankAccount(SubContractorSubContractorBankAccount bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessType")
    public SubContractorSubContractorBusinessTypeEnum businessType;
    public SubContractorSubContractor withBusinessType(SubContractorSubContractorBusinessTypeEnum businessType) {
        this.businessType = businessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyName")
    public String companyName;
    public SubContractorSubContractor withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyRegistrationNumber")
    public String companyRegistrationNumber;
    public SubContractorSubContractor withCompanyRegistrationNumber(String companyRegistrationNumber) {
        this.companyRegistrationNumber = companyRegistrationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deactivated")
    public Boolean deactivated;
    public SubContractorSubContractor withDeactivated(Boolean deactivated) {
        this.deactivated = deactivated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public LocalDate effectiveDate;
    public SubContractorSubContractor withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public SubContractorSubContractor withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Initials")
    public String initials;
    public SubContractorSubContractor withInitials(String initials) {
        this.initials = initials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public SubContractorSubContractor withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetaData")
    public java.util.Map<String, Object> metaData;
    public SubContractorSubContractor withMetaData(java.util.Map<String, Object> metaData) {
        this.metaData = metaData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleName")
    public String middleName;
    public SubContractorSubContractor withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NiNumber")
    public String niNumber;
    public SubContractorSubContractor withNiNumber(String niNumber) {
        this.niNumber = niNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartnershipName")
    public String partnershipName;
    public SubContractorSubContractor withPartnershipName(String partnershipName) {
        this.partnershipName = partnershipName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartnershipUniqueTaxReference")
    public String partnershipUniqueTaxReference;
    public SubContractorSubContractor withPartnershipUniqueTaxReference(String partnershipUniqueTaxReference) {
        this.partnershipUniqueTaxReference = partnershipUniqueTaxReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayFrequency")
    public SubContractorSubContractorPayFrequencyEnum payFrequency;
    public SubContractorSubContractor withPayFrequency(SubContractorSubContractorPayFrequencyEnum payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethod")
    public SubContractorSubContractorPaymentMethodEnum paymentMethod;
    public SubContractorSubContractor withPaymentMethod(SubContractorSubContractorPaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public SubContractorSubContractorRegionEnum region;
    public SubContractorSubContractor withRegion(SubContractorSubContractorRegionEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revision")
    public Integer revision;
    public SubContractorSubContractor withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxationStatus")
    public SubContractorSubContractorTaxationStatusEnum taxationStatus;
    public SubContractorSubContractor withTaxationStatus(SubContractorSubContractorTaxationStatusEnum taxationStatus) {
        this.taxationStatus = taxationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Telephone")
    public String telephone;
    public SubContractorSubContractor withTelephone(String telephone) {
        this.telephone = telephone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Territory")
    public SubContractorSubContractorTerritoryEnum territory;
    public SubContractorSubContractor withTerritory(SubContractorSubContractorTerritoryEnum territory) {
        this.territory = territory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public SubContractorSubContractor withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TradingName")
    public String tradingName;
    public SubContractorSubContractor withTradingName(String tradingName) {
        this.tradingName = tradingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UniqueTaxReference")
    public String uniqueTaxReference;
    public SubContractorSubContractor withUniqueTaxReference(String uniqueTaxReference) {
        this.uniqueTaxReference = uniqueTaxReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VatRegistered")
    public Boolean vatRegistered;
    public SubContractorSubContractor withVatRegistered(Boolean vatRegistered) {
        this.vatRegistered = vatRegistered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VatRegistrationNumber")
    public String vatRegistrationNumber;
    public SubContractorSubContractor withVatRegistrationNumber(String vatRegistrationNumber) {
        this.vatRegistrationNumber = vatRegistrationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("VerificationDate")
    public OffsetDateTime verificationDate;
    public SubContractorSubContractor withVerificationDate(OffsetDateTime verificationDate) {
        this.verificationDate = verificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerificationNumber")
    public String verificationNumber;
    public SubContractorSubContractor withVerificationNumber(String verificationNumber) {
        this.verificationNumber = verificationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorksNumber")
    public String worksNumber;
    public SubContractorSubContractor withWorksNumber(String worksNumber) {
        this.worksNumber = worksNumber;
        return this;
    }
}