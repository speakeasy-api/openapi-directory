package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AquiferSerializerBasic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aquifer_id")
    public Long aquiferId;
    public AquiferSerializerBasic withAquiferId(Long aquiferId) {
        this.aquiferId = aquiferId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AquiferSerializerBasic withDescription(String description) {
        this.description = description;
        return this;
    }
}