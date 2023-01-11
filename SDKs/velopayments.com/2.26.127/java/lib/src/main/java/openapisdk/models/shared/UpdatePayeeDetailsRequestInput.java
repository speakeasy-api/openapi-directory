package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePayeeDetailsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PayeeAddress address;
    public UpdatePayeeDetailsRequestInput withAddress(PayeeAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge challenge;
    public UpdatePayeeDetailsRequestInput withChallenge(Challenge challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company company;
    public UpdatePayeeDetailsRequestInput withCompany(Company company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UpdatePayeeDetailsRequestInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public IndividualInput individual;
    public UpdatePayeeDetailsRequestInput withIndividual(IndividualInput individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public UpdatePayeeDetailsRequestInput withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public PayeeTypeEnum payeeType;
    public UpdatePayeeDetailsRequestInput withPayeeType(PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
}