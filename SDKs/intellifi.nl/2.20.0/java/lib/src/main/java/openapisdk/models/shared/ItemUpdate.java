package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ItemUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_request")
    public java.util.Map<String, Object> configRequest;
    public ItemUpdate withConfigRequest(java.util.Map<String, Object> configRequest) {
        this.configRequest = configRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public ItemUpdate withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ItemUpdate withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_request")
    public String locationRequest;
    public ItemUpdate withLocationRequest(String locationRequest) {
        this.locationRequest = locationRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public ItemUpdate withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
}