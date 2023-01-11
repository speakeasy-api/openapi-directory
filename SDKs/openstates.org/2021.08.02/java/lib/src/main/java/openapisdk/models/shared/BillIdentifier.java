package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillIdentifier {
    @JsonProperty("identifier")
    public String identifier;
    public BillIdentifier withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
}