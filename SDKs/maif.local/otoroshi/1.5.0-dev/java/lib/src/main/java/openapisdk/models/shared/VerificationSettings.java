package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerificationSettings
 * Settings to verify the value of JWT token fields
**/
public class VerificationSettings {
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public VerificationSettings withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappingSettings")
    public MappingSettings mappingSettings;
    public VerificationSettings withMappingSettings(MappingSettings mappingSettings) {
        this.mappingSettings = mappingSettings;
        return this;
    }
}