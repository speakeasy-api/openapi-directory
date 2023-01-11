package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FailedPayee2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public CreatePayeeAddress2 address;
    public FailedPayee2 withAddress(CreatePayeeAddress2 address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge2 challenge;
    public FailedPayee2 withChallenge(Challenge2 challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company2 company;
    public FailedPayee2 withCompany(Company2 company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public FailedPayee2 withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public CreateIndividual2 individual;
    public FailedPayee2 withIndividual(CreateIndividual2 individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public FailedPayee2 withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeId")
    public String payeeId;
    public FailedPayee2 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannel")
    public CreatePaymentChannel2 paymentChannel;
    public FailedPayee2 withPaymentChannel(CreatePaymentChannel2 paymentChannel) {
        this.paymentChannel = paymentChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorRefs")
    public PayeePayorRef[] payorRefs;
    public FailedPayee2 withPayorRefs(PayeePayorRef[] payorRefs) {
        this.payorRefs = payorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public FailedPayee2 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PayeeTypeEnum type;
    public FailedPayee2 withType(PayeeTypeEnum type) {
        this.type = type;
        return this;
    }
}