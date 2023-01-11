package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GaDataDataTableRowsC {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v")
    public String v;
    public GaDataDataTableRowsC withV(String v) {
        this.v = v;
        return this;
    }
}