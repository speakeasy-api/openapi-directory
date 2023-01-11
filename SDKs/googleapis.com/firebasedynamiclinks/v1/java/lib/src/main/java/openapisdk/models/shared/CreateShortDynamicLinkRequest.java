package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateShortDynamicLinkRequest
 * Request to create a short Dynamic Link.
**/
public class CreateShortDynamicLinkRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicLinkInfo")
    public DynamicLinkInfo dynamicLinkInfo;
    public CreateShortDynamicLinkRequest withDynamicLinkInfo(DynamicLinkInfo dynamicLinkInfo) {
        this.dynamicLinkInfo = dynamicLinkInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longDynamicLink")
    public String longDynamicLink;
    public CreateShortDynamicLinkRequest withLongDynamicLink(String longDynamicLink) {
        this.longDynamicLink = longDynamicLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdkVersion")
    public String sdkVersion;
    public CreateShortDynamicLinkRequest withSDKVersion(String sdkVersion) {
        this.sdkVersion = sdkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public Suffix suffix;
    public CreateShortDynamicLinkRequest withSuffix(Suffix suffix) {
        this.suffix = suffix;
        return this;
    }
}