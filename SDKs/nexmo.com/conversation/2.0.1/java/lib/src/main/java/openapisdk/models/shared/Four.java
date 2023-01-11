package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Four
 * Connect to a VBC extension
**/
public class Four {
    @JsonProperty("extension")
    public String extension;
    public Four withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Four withType(String type) {
        this.type = type;
        return this;
    }
}