package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MappingSettings
 * Settings to change fields of a JWT token
**/
public class MappingSettings {
    @JsonProperty("map")
    public java.util.Map<String, String> map;
    public MappingSettings withMap(java.util.Map<String, String> map) {
        this.map = map;
        return this;
    }
    @JsonProperty("remove")
    public String[] remove;
    public MappingSettings withRemove(String[] remove) {
        this.remove = remove;
        return this;
    }
    @JsonProperty("values")
    public java.util.Map<String, String> values;
    public MappingSettings withValues(java.util.Map<String, String> values) {
        this.values = values;
        return this;
    }
}