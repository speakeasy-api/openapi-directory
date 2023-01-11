package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransformSettings
 * Settings to transform a JWT token and its location
**/
public class TransformSettings {
    @JsonProperty("location")
    public Object location;
    public TransformSettings withLocation(Object location) {
        this.location = location;
        return this;
    }
    @JsonProperty("mappingSettings")
    public MappingSettings mappingSettings;
    public TransformSettings withMappingSettings(MappingSettings mappingSettings) {
        this.mappingSettings = mappingSettings;
        return this;
    }
}