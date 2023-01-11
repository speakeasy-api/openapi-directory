package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RefJwtVerifier
 * Reference to a global JWT verifier
**/
public class RefJwtVerifier {
    @JsonProperty("enabled")
    public Boolean enabled;
    public RefJwtVerifier withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public RefJwtVerifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RefJwtVerifier withType(String type) {
        this.type = type;
        return this;
    }
}