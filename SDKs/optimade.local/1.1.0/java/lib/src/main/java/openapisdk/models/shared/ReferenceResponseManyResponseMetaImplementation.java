package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResponseManyResponseMetaImplementation
 * Information on the server implementation
**/
public class ReferenceResponseManyResponseMetaImplementation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public ReferenceResponseManyResponseMetaImplementation withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_tracker")
    public Object issueTracker;
    public ReferenceResponseManyResponseMetaImplementation withIssueTracker(Object issueTracker) {
        this.issueTracker = issueTracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer")
    public ReferenceResponseManyResponseMetaImplementationImplementationMaintainer maintainer;
    public ReferenceResponseManyResponseMetaImplementation withMaintainer(ReferenceResponseManyResponseMetaImplementationImplementationMaintainer maintainer) {
        this.maintainer = maintainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReferenceResponseManyResponseMetaImplementation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_url")
    public Object sourceUrl;
    public ReferenceResponseManyResponseMetaImplementation withSourceUrl(Object sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ReferenceResponseManyResponseMetaImplementation withVersion(String version) {
        this.version = version;
        return this;
    }
}