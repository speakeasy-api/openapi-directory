package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResponseOneResponseMetaImplementation
 * Information on the server implementation
**/
public class ReferenceResponseOneResponseMetaImplementation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public ReferenceResponseOneResponseMetaImplementation withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_tracker")
    public Object issueTracker;
    public ReferenceResponseOneResponseMetaImplementation withIssueTracker(Object issueTracker) {
        this.issueTracker = issueTracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer")
    public ReferenceResponseOneResponseMetaImplementationImplementationMaintainer maintainer;
    public ReferenceResponseOneResponseMetaImplementation withMaintainer(ReferenceResponseOneResponseMetaImplementationImplementationMaintainer maintainer) {
        this.maintainer = maintainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReferenceResponseOneResponseMetaImplementation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_url")
    public Object sourceUrl;
    public ReferenceResponseOneResponseMetaImplementation withSourceUrl(Object sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ReferenceResponseOneResponseMetaImplementation withVersion(String version) {
        this.version = version;
        return this;
    }
}