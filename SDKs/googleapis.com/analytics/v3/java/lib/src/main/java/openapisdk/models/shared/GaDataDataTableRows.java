package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GaDataDataTableRows {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("c")
    public GaDataDataTableRowsC[] c;
    public GaDataDataTableRows withC(GaDataDataTableRowsC[] c) {
        this.c = c;
        return this;
    }
}