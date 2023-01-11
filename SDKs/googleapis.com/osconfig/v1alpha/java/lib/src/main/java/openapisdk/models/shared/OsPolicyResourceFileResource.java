package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceFileResource
 * A resource that manages the state of a file.
**/
public class OsPolicyResourceFileResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public OsPolicyResourceFileResource withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public OsPolicyResourceFile file;
    public OsPolicyResourceFileResource withFile(OsPolicyResourceFile file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public OsPolicyResourceFileResource withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String permissions;
    public OsPolicyResourceFileResource withPermissions(String permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public OsPolicyResourceFileResourceStateEnum state;
    public OsPolicyResourceFileResource withState(OsPolicyResourceFileResourceStateEnum state) {
        this.state = state;
        return this;
    }
}