package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NominalCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NominalCode")
    public NominalCodeNominalCode nominalCode;
    public NominalCode withNominalCode(NominalCodeNominalCode nominalCode) {
        this.nominalCode = nominalCode;
        return this;
    }
}