package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code_hex")
    public String codeHex;
    public ItemInput withCodeHex(String codeHex) {
        this.codeHex = codeHex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_request")
    public java.util.Map<String, Object> configRequest;
    public ItemInput withConfigRequest(java.util.Map<String, Object> configRequest) {
        this.configRequest = configRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public ItemInput withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ItemInput withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_request")
    public String locationRequest;
    public ItemInput withLocationRequest(String locationRequest) {
        this.locationRequest = locationRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public ItemInput withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public ItemProtocolEnum protocol;
    public ItemInput withProtocol(ItemProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technology")
    public TechnologyEnum technology;
    public ItemInput withTechnology(TechnologyEnum technology) {
        this.technology = technology;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ItemTypeEnum type;
    public ItemInput withType(ItemTypeEnum type) {
        this.type = type;
        return this;
    }
}