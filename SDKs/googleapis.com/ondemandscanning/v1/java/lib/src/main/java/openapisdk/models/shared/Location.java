package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpeUri")
    public String cpeUri;
    public Location withCpeUri(String cpeUri) {
        this.cpeUri = cpeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Location withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Version version;
    public Location withVersion(Version version) {
        this.version = version;
        return this;
    }
}