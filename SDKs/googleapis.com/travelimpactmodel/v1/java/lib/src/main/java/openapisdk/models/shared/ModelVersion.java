package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModelVersion
 * Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
**/
public class ModelVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dated")
    public String dated;
    public ModelVersion withDated(String dated) {
        this.dated = dated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("major")
    public Integer major;
    public ModelVersion withMajor(Integer major) {
        this.major = major;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minor")
    public Integer minor;
    public ModelVersion withMinor(Integer minor) {
        this.minor = minor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patch")
    public Integer patch;
    public ModelVersion withPatch(Integer patch) {
        this.patch = patch;
        return this;
    }
}