package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvitePayeeRequest2 {
    @JsonProperty("payorId")
    public String payorId;
    public InvitePayeeRequest2 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}