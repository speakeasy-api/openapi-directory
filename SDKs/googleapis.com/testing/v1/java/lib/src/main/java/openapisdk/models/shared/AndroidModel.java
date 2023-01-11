package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidModel
 * A description of an Android device tests may be run on.
**/
public class AndroidModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public AndroidModel withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codename")
    public String codename;
    public AndroidModel withCodename(String codename) {
        this.codename = codename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public AndroidModelFormEnum form;
    public AndroidModel withForm(AndroidModelFormEnum form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
    public AndroidModelFormFactorEnum formFactor;
    public AndroidModel withFormFactor(AndroidModelFormFactorEnum formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AndroidModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowFpsVideoRecording")
    public Boolean lowFpsVideoRecording;
    public AndroidModel withLowFpsVideoRecording(Boolean lowFpsVideoRecording) {
        this.lowFpsVideoRecording = lowFpsVideoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public AndroidModel withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AndroidModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenDensity")
    public Integer screenDensity;
    public AndroidModel withScreenDensity(Integer screenDensity) {
        this.screenDensity = screenDensity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenX")
    public Integer screenX;
    public AndroidModel withScreenX(Integer screenX) {
        this.screenX = screenX;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenY")
    public Integer screenY;
    public AndroidModel withScreenY(Integer screenY) {
        this.screenY = screenY;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedAbis")
    public String[] supportedAbis;
    public AndroidModel withSupportedAbis(String[] supportedAbis) {
        this.supportedAbis = supportedAbis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedVersionIds")
    public String[] supportedVersionIds;
    public AndroidModel withSupportedVersionIds(String[] supportedVersionIds) {
        this.supportedVersionIds = supportedVersionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public AndroidModel withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUrl")
    public String thumbnailUrl;
    public AndroidModel withThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }
}