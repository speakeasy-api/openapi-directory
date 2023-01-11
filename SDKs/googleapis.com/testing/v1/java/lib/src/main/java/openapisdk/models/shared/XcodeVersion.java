package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * XcodeVersion
 * An Xcode version that an iOS version is compatible with.
**/
public class XcodeVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public XcodeVersion withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public XcodeVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}