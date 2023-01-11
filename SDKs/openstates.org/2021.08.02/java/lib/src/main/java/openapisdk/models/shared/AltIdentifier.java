package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AltIdentifier {
    @JsonProperty("identifier")
    public String identifier;
    public AltIdentifier withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("scheme")
    public String scheme;
    public AltIdentifier withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
}