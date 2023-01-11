package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePayeesRequestInput {
    @JsonProperty("payees")
    public CreatePayeeInput[] payees;
    public CreatePayeesRequestInput withPayees(CreatePayeeInput[] payees) {
        this.payees = payees;
        return this;
    }
    @JsonProperty("payorId")
    public String payorId;
    public CreatePayeesRequestInput withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}