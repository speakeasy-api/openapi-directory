package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Browser
 * Contains information about a browser that can be targeted by ads.
**/
public class Browser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserVersionId")
    public String browserVersionId;
    public Browser withBrowserVersionId(String browserVersionId) {
        this.browserVersionId = browserVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dartId")
    public String dartId;
    public Browser withDartId(String dartId) {
        this.dartId = dartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Browser withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorVersion")
    public String majorVersion;
    public Browser withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minorVersion")
    public String minorVersion;
    public Browser withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Browser withName(String name) {
        this.name = name;
        return this;
    }
}