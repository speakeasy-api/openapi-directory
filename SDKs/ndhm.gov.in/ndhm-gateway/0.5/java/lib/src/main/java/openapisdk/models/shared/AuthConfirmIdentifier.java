package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthConfirmIdentifier {
    @JsonProperty("type")
    public AuthConfirmIdentifierTypeEnum type;
    public AuthConfirmIdentifier withType(AuthConfirmIdentifierTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public AuthConfirmIdentifier withValue(String value) {
        this.value = value;
        return this;
    }
}