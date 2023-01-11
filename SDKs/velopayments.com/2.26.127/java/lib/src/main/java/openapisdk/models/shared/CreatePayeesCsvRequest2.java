package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePayeesCsvRequest2 {
    @JsonProperty("addressCity")
    public String addressCity;
    public CreatePayeesCsvRequest2 withAddressCity(String addressCity) {
        this.addressCity = addressCity;
        return this;
    }
    @JsonProperty("addressCountry")
    public CreatePayeesCsvRequest2AddressCountryEnum addressCountry;
    public CreatePayeesCsvRequest2 withAddressCountry(CreatePayeesCsvRequest2AddressCountryEnum addressCountry) {
        this.addressCountry = addressCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressCountyOrProvince")
    public String addressCountyOrProvince;
    public CreatePayeesCsvRequest2 withAddressCountyOrProvince(String addressCountyOrProvince) {
        this.addressCountyOrProvince = addressCountyOrProvince;
        return this;
    }
    @JsonProperty("addressLine1")
    public String addressLine1;
    public CreatePayeesCsvRequest2 withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine2")
    public String addressLine2;
    public CreatePayeesCsvRequest2 withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine3")
    public String addressLine3;
    public CreatePayeesCsvRequest2 withAddressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine4")
    public String addressLine4;
    public CreatePayeesCsvRequest2 withAddressLine4(String addressLine4) {
        this.addressLine4 = addressLine4;
        return this;
    }
    @JsonProperty("addressZipOrPostcode")
    public String addressZipOrPostcode;
    public CreatePayeesCsvRequest2 withAddressZipOrPostcode(String addressZipOrPostcode) {
        this.addressZipOrPostcode = addressZipOrPostcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeDescription")
    public String challengeDescription;
    public CreatePayeesCsvRequest2 withChallengeDescription(String challengeDescription) {
        this.challengeDescription = challengeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeValue")
    public String challengeValue;
    public CreatePayeesCsvRequest2 withChallengeValue(String challengeValue) {
        this.challengeValue = challengeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyEIN")
    public String companyEIN;
    public CreatePayeesCsvRequest2 withCompanyEin(String companyEIN) {
        this.companyEIN = companyEIN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public CreatePayeesCsvRequest2 withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyOperatingName")
    public String companyOperatingName;
    public CreatePayeesCsvRequest2 withCompanyOperatingName(String companyOperatingName) {
        this.companyOperatingName = companyOperatingName;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public CreatePayeesCsvRequest2 withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualDateOfBirth")
    public LocalDate individualDateOfBirth;
    public CreatePayeesCsvRequest2 withIndividualDateOfBirth(LocalDate individualDateOfBirth) {
        this.individualDateOfBirth = individualDateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualFirstName")
    public String individualFirstName;
    public CreatePayeesCsvRequest2 withIndividualFirstName(String individualFirstName) {
        this.individualFirstName = individualFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualLastName")
    public String individualLastName;
    public CreatePayeesCsvRequest2 withIndividualLastName(String individualLastName) {
        this.individualLastName = individualLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualNationalIdentification")
    public String individualNationalIdentification;
    public CreatePayeesCsvRequest2 withIndividualNationalIdentification(String individualNationalIdentification) {
        this.individualNationalIdentification = individualNationalIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualOtherNames")
    public String individualOtherNames;
    public CreatePayeesCsvRequest2 withIndividualOtherNames(String individualOtherNames) {
        this.individualOtherNames = individualOtherNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualTitle")
    public String individualTitle;
    public CreatePayeesCsvRequest2 withIndividualTitle(String individualTitle) {
        this.individualTitle = individualTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeLanguage")
    public String payeeLanguage;
    public CreatePayeesCsvRequest2 withPayeeLanguage(String payeeLanguage) {
        this.payeeLanguage = payeeLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelAccountName")
    public String paymentChannelAccountName;
    public CreatePayeesCsvRequest2 withPaymentChannelAccountName(String paymentChannelAccountName) {
        this.paymentChannelAccountName = paymentChannelAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelAccountNumber")
    public String paymentChannelAccountNumber;
    public CreatePayeesCsvRequest2 withPaymentChannelAccountNumber(String paymentChannelAccountNumber) {
        this.paymentChannelAccountNumber = paymentChannelAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelCountryCode")
    public CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum paymentChannelCountryCode;
    public CreatePayeesCsvRequest2 withPaymentChannelCountryCode(CreatePayeesCsvRequest2PaymentChannelCountryCodeEnum paymentChannelCountryCode) {
        this.paymentChannelCountryCode = paymentChannelCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelCurrency")
    public CreatePayeesCsvRequest2PaymentChannelCurrencyEnum paymentChannelCurrency;
    public CreatePayeesCsvRequest2 withPaymentChannelCurrency(CreatePayeesCsvRequest2PaymentChannelCurrencyEnum paymentChannelCurrency) {
        this.paymentChannelCurrency = paymentChannelCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelIban")
    public String paymentChannelIban;
    public CreatePayeesCsvRequest2 withPaymentChannelIban(String paymentChannelIban) {
        this.paymentChannelIban = paymentChannelIban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelRoutingNumber")
    public String paymentChannelRoutingNumber;
    public CreatePayeesCsvRequest2 withPaymentChannelRoutingNumber(String paymentChannelRoutingNumber) {
        this.paymentChannelRoutingNumber = paymentChannelRoutingNumber;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public CreatePayeesCsvRequest2 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonProperty("type")
    public PayeeTypeEnum type;
    public CreatePayeesCsvRequest2 withType(PayeeTypeEnum type) {
        this.type = type;
        return this;
    }
}