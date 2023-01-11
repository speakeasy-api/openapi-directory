package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Version
 * Version contains structured information about the version of a package.
**/
public class Version {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epoch")
    public Integer epoch;
    public Version withEpoch(Integer epoch) {
        this.epoch = epoch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public Version withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusive")
    public Boolean inclusive;
    public Version withInclusive(Boolean inclusive) {
        this.inclusive = inclusive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public VersionKindEnum kind;
    public Version withKind(VersionKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Version withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public Version withRevision(String revision) {
        this.revision = revision;
        return this;
    }
}