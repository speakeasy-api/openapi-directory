package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessControl")
    public ResourceAccessControl accessControl;
    public Resource withAccessControl(ResourceAccessControl accessControl) {
        this.accessControl = accessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalProperties")
    public String finalProperties;
    public Resource withFinalProperties(String finalProperties) {
        this.finalProperties = finalProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Resource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertTime")
    public String insertTime;
    public Resource withInsertTime(String insertTime) {
        this.insertTime = insertTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest")
    public String manifest;
    public Resource withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Resource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public String properties;
    public Resource withProperties(String properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Resource withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update")
    public ResourceUpdate update;
    public Resource withUpdate(ResourceUpdate update) {
        this.update = update;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Resource withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Resource withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public ResourceWarnings[] warnings;
    public Resource withWarnings(ResourceWarnings[] warnings) {
        this.warnings = warnings;
        return this;
    }
}