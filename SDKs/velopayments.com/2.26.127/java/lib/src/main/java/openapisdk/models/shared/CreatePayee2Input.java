package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePayee2Input {
    @JsonProperty("address")
    public CreatePayeeAddress2 address;
    public CreatePayee2Input withAddress(CreatePayeeAddress2 address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge2 challenge;
    public CreatePayee2Input withChallenge(Challenge2 challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company2 company;
    public CreatePayee2Input withCompany(Company2 company) {
        this.company = company;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public CreatePayee2Input withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public CreateIndividual2 individual;
    public CreatePayee2Input withIndividual(CreateIndividual2 individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public CreatePayee2Input withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannel")
    public CreatePaymentChannel2 paymentChannel;
    public CreatePayee2Input withPaymentChannel(CreatePaymentChannel2 paymentChannel) {
        this.paymentChannel = paymentChannel;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public CreatePayee2Input withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonProperty("type")
    public PayeeTypeEnum type;
    public CreatePayee2Input withType(PayeeTypeEnum type) {
        this.type = type;
        return this;
    }
}