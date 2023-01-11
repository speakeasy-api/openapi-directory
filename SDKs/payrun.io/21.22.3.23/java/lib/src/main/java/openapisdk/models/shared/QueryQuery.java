package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludeNullOrEmptyElements")
    public Boolean excludeNullOrEmptyElements;
    public QueryQuery withExcludeNullOrEmptyElements(Boolean excludeNullOrEmptyElements) {
        this.excludeNullOrEmptyElements = excludeNullOrEmptyElements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Groups")
    public QueryQueryGroup groups;
    public QueryQuery withGroups(QueryQueryGroup groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootNodeName")
    public String rootNodeName;
    public QueryQuery withRootNodeName(String rootNodeName) {
        this.rootNodeName = rootNodeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressMetricAttributes")
    public Boolean suppressMetricAttributes;
    public QueryQuery withSuppressMetricAttributes(Boolean suppressMetricAttributes) {
        this.suppressMetricAttributes = suppressMetricAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variables")
    public QueryQueryVariable variables;
    public QueryQuery withVariables(QueryQueryVariable variables) {
        this.variables = variables;
        return this;
    }
}