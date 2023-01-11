package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceFile
 * A remote or local file.
**/
public class OsPolicyResourceFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowInsecure")
    public Boolean allowInsecure;
    public OsPolicyResourceFile withAllowInsecure(Boolean allowInsecure) {
        this.allowInsecure = allowInsecure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcs")
    public OsPolicyResourceFileGcs gcs;
    public OsPolicyResourceFile withGcs(OsPolicyResourceFileGcs gcs) {
        this.gcs = gcs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPath")
    public String localPath;
    public OsPolicyResourceFile withLocalPath(String localPath) {
        this.localPath = localPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote")
    public OsPolicyResourceFileRemote remote;
    public OsPolicyResourceFile withRemote(OsPolicyResourceFileRemote remote) {
        this.remote = remote;
        return this;
    }
}