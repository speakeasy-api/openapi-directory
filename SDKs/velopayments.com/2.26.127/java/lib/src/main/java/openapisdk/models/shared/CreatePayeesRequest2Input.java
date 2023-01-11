package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePayeesRequest2Input {
    @JsonProperty("payees")
    public CreatePayee2Input[] payees;
    public CreatePayeesRequest2Input withPayees(CreatePayee2Input[] payees) {
        this.payees = payees;
        return this;
    }
    @JsonProperty("payorId")
    public String payorId;
    public CreatePayeesRequest2Input withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}