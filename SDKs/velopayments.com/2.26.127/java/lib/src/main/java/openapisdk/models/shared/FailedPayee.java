package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FailedPayee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public CreatePayeeAddress address;
    public FailedPayee withAddress(CreatePayeeAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge challenge;
    public FailedPayee withChallenge(Challenge challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company company;
    public FailedPayee withCompany(Company company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public FailedPayee withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public CreateIndividual individual;
    public FailedPayee withIndividual(CreateIndividual individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public FailedPayee withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeId")
    public String payeeId;
    public FailedPayee withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannel")
    public CreatePaymentChannel paymentChannel;
    public FailedPayee withPaymentChannel(CreatePaymentChannel paymentChannel) {
        this.paymentChannel = paymentChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorRefs")
    public PayeePayorRefV3[] payorRefs;
    public FailedPayee withPayorRefs(PayeePayorRefV3[] payorRefs) {
        this.payorRefs = payorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public FailedPayee withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PayeeTypeEnum type;
    public FailedPayee withType(PayeeTypeEnum type) {
        this.type = type;
        return this;
    }
}