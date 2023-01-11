package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCallRequestTransferNccoDestination {
    @JsonProperty("ncco")
    public java.util.Map<String, Object>[] ncco;
    public UpdateCallRequestTransferNccoDestination withNcco(java.util.Map<String, Object>[] ncco) {
        this.ncco = ncco;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public UpdateCallRequestTransferNccoDestination withType(String type) {
        this.type = type;
        return this;
    }
}