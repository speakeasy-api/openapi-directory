package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeSize
 * Specifies the size of the creative.
**/
public class CreativeSize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedFormats")
    public CreativeSizeAllowedFormatsEnum[] allowedFormats;
    public CreativeSize withAllowedFormats(CreativeSizeAllowedFormatsEnum[] allowedFormats) {
        this.allowedFormats = allowedFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionSizes")
    public Size[] companionSizes;
    public CreativeSize withCompanionSizes(Size[] companionSizes) {
        this.companionSizes = companionSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSizeType")
    public CreativeSizeCreativeSizeTypeEnum creativeSizeType;
    public CreativeSize withCreativeSizeType(CreativeSizeCreativeSizeTypeEnum creativeSizeType) {
        this.creativeSizeType = creativeSizeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativeTemplate")
    public CreativeSizeNativeTemplateEnum nativeTemplate;
    public CreativeSize withNativeTemplate(CreativeSizeNativeTemplateEnum nativeTemplate) {
        this.nativeTemplate = nativeTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;
    public CreativeSize withSize(Size size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippableAdType")
    public CreativeSizeSkippableAdTypeEnum skippableAdType;
    public CreativeSize withSkippableAdType(CreativeSizeSkippableAdTypeEnum skippableAdType) {
        this.skippableAdType = skippableAdType;
        return this;
    }
}