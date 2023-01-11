package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResponseOneResponseMetaImplementation
 * Information on the server implementation
**/
public class StructureResponseOneResponseMetaImplementation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public StructureResponseOneResponseMetaImplementation withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_tracker")
    public Object issueTracker;
    public StructureResponseOneResponseMetaImplementation withIssueTracker(Object issueTracker) {
        this.issueTracker = issueTracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer")
    public StructureResponseOneResponseMetaImplementationImplementationMaintainer maintainer;
    public StructureResponseOneResponseMetaImplementation withMaintainer(StructureResponseOneResponseMetaImplementationImplementationMaintainer maintainer) {
        this.maintainer = maintainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StructureResponseOneResponseMetaImplementation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_url")
    public Object sourceUrl;
    public StructureResponseOneResponseMetaImplementation withSourceUrl(Object sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public StructureResponseOneResponseMetaImplementation withVersion(String version) {
        this.version = version;
        return this;
    }
}