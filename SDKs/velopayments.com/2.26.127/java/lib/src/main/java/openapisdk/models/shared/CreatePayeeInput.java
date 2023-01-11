package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePayeeInput {
    @JsonProperty("address")
    public CreatePayeeAddress address;
    public CreatePayeeInput withAddress(CreatePayeeAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge challenge;
    public CreatePayeeInput withChallenge(Challenge challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company company;
    public CreatePayeeInput withCompany(Company company) {
        this.company = company;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public CreatePayeeInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public CreateIndividual individual;
    public CreatePayeeInput withIndividual(CreateIndividual individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public CreatePayeeInput withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannel")
    public CreatePaymentChannel paymentChannel;
    public CreatePayeeInput withPaymentChannel(CreatePaymentChannel paymentChannel) {
        this.paymentChannel = paymentChannel;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public CreatePayeeInput withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonProperty("type")
    public PayeeTypeEnum type;
    public CreatePayeeInput withType(PayeeTypeEnum type) {
        this.type = type;
        return this;
    }
}