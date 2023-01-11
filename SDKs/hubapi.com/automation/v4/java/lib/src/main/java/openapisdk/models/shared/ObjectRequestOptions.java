package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObjectRequestOptions
 * Configures what properties of the enrolled CRM object are included in the action execution request
**/
public class ObjectRequestOptions {
    @JsonProperty("properties")
    public String[] properties;
    public ObjectRequestOptions withProperties(String[] properties) {
        this.properties = properties;
        return this;
    }
}