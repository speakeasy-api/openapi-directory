package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoResponseResponseMetaImplementation
 * Information on the server implementation
**/
public class InfoResponseResponseMetaImplementation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public InfoResponseResponseMetaImplementation withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_tracker")
    public Object issueTracker;
    public InfoResponseResponseMetaImplementation withIssueTracker(Object issueTracker) {
        this.issueTracker = issueTracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer")
    public InfoResponseResponseMetaImplementationImplementationMaintainer maintainer;
    public InfoResponseResponseMetaImplementation withMaintainer(InfoResponseResponseMetaImplementationImplementationMaintainer maintainer) {
        this.maintainer = maintainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InfoResponseResponseMetaImplementation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_url")
    public Object sourceUrl;
    public InfoResponseResponseMetaImplementation withSourceUrl(Object sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public InfoResponseResponseMetaImplementation withVersion(String version) {
        this.version = version;
        return this;
    }
}