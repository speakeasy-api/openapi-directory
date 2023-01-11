package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingValueCreativeSize
 * Next Id: 7
**/
public class TargetingValueCreativeSize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedFormats")
    public String[] allowedFormats;
    public TargetingValueCreativeSize withAllowedFormats(String[] allowedFormats) {
        this.allowedFormats = allowedFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionSizes")
    public TargetingValueSize[] companionSizes;
    public TargetingValueCreativeSize withCompanionSizes(TargetingValueSize[] companionSizes) {
        this.companionSizes = companionSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSizeType")
    public String creativeSizeType;
    public TargetingValueCreativeSize withCreativeSizeType(String creativeSizeType) {
        this.creativeSizeType = creativeSizeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativeTemplate")
    public String nativeTemplate;
    public TargetingValueCreativeSize withNativeTemplate(String nativeTemplate) {
        this.nativeTemplate = nativeTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public TargetingValueSize size;
    public TargetingValueCreativeSize withSize(TargetingValueSize size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippableAdType")
    public String skippableAdType;
    public TargetingValueCreativeSize withSkippableAdType(String skippableAdType) {
        this.skippableAdType = skippableAdType;
        return this;
    }
}