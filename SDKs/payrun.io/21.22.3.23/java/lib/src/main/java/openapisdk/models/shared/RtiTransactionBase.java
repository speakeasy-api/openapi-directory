package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RtiTransactionBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RtiTransactionBase")
    public RtiTransactionBaseRtiTransactionBase rtiTransactionBase;
    public RtiTransactionBase withRtiTransactionBase(RtiTransactionBaseRtiTransactionBase rtiTransactionBase) {
        this.rtiTransactionBase = rtiTransactionBase;
        return this;
    }
}