package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigMapVolumeSource
 * Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
**/
public class ConfigMapVolumeSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultMode")
    public Integer defaultMode;
    public ConfigMapVolumeSource withDefaultMode(Integer defaultMode) {
        this.defaultMode = defaultMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public KeyToPath[] items;
    public ConfigMapVolumeSource withItems(KeyToPath[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigMapVolumeSource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public ConfigMapVolumeSource withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
}