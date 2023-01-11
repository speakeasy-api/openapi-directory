package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosModel
 * A description of an iOS device tests may be run on.
**/
public class IosModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceCapabilities")
    public String[] deviceCapabilities;
    public IosModel withDeviceCapabilities(String[] deviceCapabilities) {
        this.deviceCapabilities = deviceCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
    public IosModelFormFactorEnum formFactor;
    public IosModel withFormFactor(IosModelFormFactorEnum formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public IosModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IosModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenDensity")
    public Integer screenDensity;
    public IosModel withScreenDensity(Integer screenDensity) {
        this.screenDensity = screenDensity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenX")
    public Integer screenX;
    public IosModel withScreenX(Integer screenX) {
        this.screenX = screenX;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenY")
    public Integer screenY;
    public IosModel withScreenY(Integer screenY) {
        this.screenY = screenY;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedVersionIds")
    public String[] supportedVersionIds;
    public IosModel withSupportedVersionIds(String[] supportedVersionIds) {
        this.supportedVersionIds = supportedVersionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public IosModel withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}