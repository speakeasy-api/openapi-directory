package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvitePayeeRequest {
    @JsonProperty("payorId")
    public String payorId;
    public InvitePayeeRequest withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}