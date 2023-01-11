package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplianceVersion
 * Describes an appliance version.
**/
public class ApplianceVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("critical")
    public Boolean critical;
    public ApplianceVersion withCritical(Boolean critical) {
        this.critical = critical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseNotesUri")
    public String releaseNotesUri;
    public ApplianceVersion withReleaseNotesUri(String releaseNotesUri) {
        this.releaseNotesUri = releaseNotesUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApplianceVersion withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ApplianceVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}