package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePayeeDetailsRequest2Input {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PayeeAddress2 address;
    public UpdatePayeeDetailsRequest2Input withAddress(PayeeAddress2 address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge2 challenge;
    public UpdatePayeeDetailsRequest2Input withChallenge(Challenge2 challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company2 company;
    public UpdatePayeeDetailsRequest2Input withCompany(Company2 company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UpdatePayeeDetailsRequest2Input withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public Individual2Input individual;
    public UpdatePayeeDetailsRequest2Input withIndividual(Individual2Input individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public UpdatePayeeDetailsRequest2Input withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public PayeeTypeEnum payeeType;
    public UpdatePayeeDetailsRequest2Input withPayeeType(PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
}