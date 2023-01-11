package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretVersion
 * Configuration for a single version.
**/
public class SecretVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public SecretVersion withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public SecretVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}