package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthValidate200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium")
    public Long premium;
    public GetAuthValidate200ApplicationJson withPremium(Long premium) {
        this.premium = premium;
        return this;
    }
}