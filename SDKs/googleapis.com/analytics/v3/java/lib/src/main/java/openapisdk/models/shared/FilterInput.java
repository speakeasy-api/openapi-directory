package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterInput
 * JSON template for an Analytics account filter.
**/
public class FilterInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public FilterInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advancedDetails")
    public FilterAdvancedDetails advancedDetails;
    public FilterInput withAdvancedDetails(FilterAdvancedDetails advancedDetails) {
        this.advancedDetails = advancedDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeDetails")
    public FilterExpression excludeDetails;
    public FilterInput withExcludeDetails(FilterExpression excludeDetails) {
        this.excludeDetails = excludeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FilterInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeDetails")
    public FilterExpression includeDetails;
    public FilterInput withIncludeDetails(FilterExpression includeDetails) {
        this.includeDetails = includeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowercaseDetails")
    public FilterLowercaseDetails lowercaseDetails;
    public FilterInput withLowercaseDetails(FilterLowercaseDetails lowercaseDetails) {
        this.lowercaseDetails = lowercaseDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FilterInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLink")
    public FilterParentLink parentLink;
    public FilterInput withParentLink(FilterParentLink parentLink) {
        this.parentLink = parentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchAndReplaceDetails")
    public FilterSearchAndReplaceDetails searchAndReplaceDetails;
    public FilterInput withSearchAndReplaceDetails(FilterSearchAndReplaceDetails searchAndReplaceDetails) {
        this.searchAndReplaceDetails = searchAndReplaceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public FilterInput withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uppercaseDetails")
    public FilterUppercaseDetails uppercaseDetails;
    public FilterInput withUppercaseDetails(FilterUppercaseDetails uppercaseDetails) {
        this.uppercaseDetails = uppercaseDetails;
        return this;
    }
}