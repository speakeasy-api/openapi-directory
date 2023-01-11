package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResource
 * An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
**/
public class OsPolicyResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exec")
    public OsPolicyResourceExecResource exec;
    public OsPolicyResource withExec(OsPolicyResourceExecResource exec) {
        this.exec = exec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public OsPolicyResourceFileResource file;
    public OsPolicyResource withFile(OsPolicyResourceFileResource file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OsPolicyResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pkg")
    public OsPolicyResourcePackageResource pkg;
    public OsPolicyResource withPkg(OsPolicyResourcePackageResource pkg) {
        this.pkg = pkg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public OsPolicyResourceRepositoryResource repository;
    public OsPolicyResource withRepository(OsPolicyResourceRepositoryResource repository) {
        this.repository = repository;
        return this;
    }
}