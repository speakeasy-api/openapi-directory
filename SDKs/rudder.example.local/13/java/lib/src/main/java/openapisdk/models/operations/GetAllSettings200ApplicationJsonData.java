package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAllSettings200ApplicationJsonData
 * Information about the setting
**/
public class GetAllSettings200ApplicationJsonData {
    @JsonProperty("settings")
    public Object settings;
    public GetAllSettings200ApplicationJsonData withSettings(Object settings) {
        this.settings = settings;
        return this;
    }
}