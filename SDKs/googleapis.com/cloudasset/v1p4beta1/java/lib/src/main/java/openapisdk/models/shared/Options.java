package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Options
 * Contains request options.
**/
public class Options {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyzeServiceAccountImpersonation")
    public Boolean analyzeServiceAccountImpersonation;
    public Options withAnalyzeServiceAccountImpersonation(Boolean analyzeServiceAccountImpersonation) {
        this.analyzeServiceAccountImpersonation = analyzeServiceAccountImpersonation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandGroups")
    public Boolean expandGroups;
    public Options withExpandGroups(Boolean expandGroups) {
        this.expandGroups = expandGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandResources")
    public Boolean expandResources;
    public Options withExpandResources(Boolean expandResources) {
        this.expandResources = expandResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandRoles")
    public Boolean expandRoles;
    public Options withExpandRoles(Boolean expandRoles) {
        this.expandRoles = expandRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputGroupEdges")
    public Boolean outputGroupEdges;
    public Options withOutputGroupEdges(Boolean outputGroupEdges) {
        this.outputGroupEdges = outputGroupEdges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputResourceEdges")
    public Boolean outputResourceEdges;
    public Options withOutputResourceEdges(Boolean outputResourceEdges) {
        this.outputResourceEdges = outputResourceEdges;
        return this;
    }
}