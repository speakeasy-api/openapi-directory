package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosVersion
 * An iOS version.
**/
public class IosVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public IosVersion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorVersion")
    public Integer majorVersion;
    public IosVersion withMajorVersion(Integer majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minorVersion")
    public Integer minorVersion;
    public IosVersion withMinorVersion(Integer minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedXcodeVersionIds")
    public String[] supportedXcodeVersionIds;
    public IosVersion withSupportedXcodeVersionIds(String[] supportedXcodeVersionIds) {
        this.supportedXcodeVersionIds = supportedXcodeVersionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public IosVersion withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}