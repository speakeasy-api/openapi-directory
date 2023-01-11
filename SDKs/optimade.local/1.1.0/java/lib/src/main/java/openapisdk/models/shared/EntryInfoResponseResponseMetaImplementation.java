package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntryInfoResponseResponseMetaImplementation
 * Information on the server implementation
**/
public class EntryInfoResponseResponseMetaImplementation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public EntryInfoResponseResponseMetaImplementation withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_tracker")
    public Object issueTracker;
    public EntryInfoResponseResponseMetaImplementation withIssueTracker(Object issueTracker) {
        this.issueTracker = issueTracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer")
    public EntryInfoResponseResponseMetaImplementationImplementationMaintainer maintainer;
    public EntryInfoResponseResponseMetaImplementation withMaintainer(EntryInfoResponseResponseMetaImplementationImplementationMaintainer maintainer) {
        this.maintainer = maintainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EntryInfoResponseResponseMetaImplementation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_url")
    public Object sourceUrl;
    public EntryInfoResponseResponseMetaImplementation withSourceUrl(Object sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public EntryInfoResponseResponseMetaImplementation withVersion(String version) {
        this.version = version;
        return this;
    }
}