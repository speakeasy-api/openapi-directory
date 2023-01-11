package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadDataTransaction6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transaction")
    public ObTransaction6[] transaction;
    public ObReadDataTransaction6 withTransaction(ObTransaction6[] transaction) {
        this.transaction = transaction;
        return this;
    }
}