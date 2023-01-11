package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateManagedShortLinkRequest
 * Request to create a managed Short Dynamic Link.
**/
public class CreateManagedShortLinkRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicLinkInfo")
    public DynamicLinkInfo dynamicLinkInfo;
    public CreateManagedShortLinkRequest withDynamicLinkInfo(DynamicLinkInfo dynamicLinkInfo) {
        this.dynamicLinkInfo = dynamicLinkInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longDynamicLink")
    public String longDynamicLink;
    public CreateManagedShortLinkRequest withLongDynamicLink(String longDynamicLink) {
        this.longDynamicLink = longDynamicLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateManagedShortLinkRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdkVersion")
    public String sdkVersion;
    public CreateManagedShortLinkRequest withSDKVersion(String sdkVersion) {
        this.sdkVersion = sdkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public Suffix suffix;
    public CreateManagedShortLinkRequest withSuffix(Suffix suffix) {
        this.suffix = suffix;
        return this;
    }
}