package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublicIdentifier
 * A public identifier for this customer.
**/
public class PublicIdentifier {
    @JsonProperty("id")
    public String id;
    public PublicIdentifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("scheme")
    public String scheme;
    public PublicIdentifier withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
}