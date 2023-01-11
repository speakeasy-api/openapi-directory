package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Filter
 * JSON template for an Analytics account filter.
**/
public class Filter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Filter withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advancedDetails")
    public FilterAdvancedDetails advancedDetails;
    public Filter withAdvancedDetails(FilterAdvancedDetails advancedDetails) {
        this.advancedDetails = advancedDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Filter withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeDetails")
    public FilterExpression excludeDetails;
    public Filter withExcludeDetails(FilterExpression excludeDetails) {
        this.excludeDetails = excludeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Filter withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeDetails")
    public FilterExpression includeDetails;
    public Filter withIncludeDetails(FilterExpression includeDetails) {
        this.includeDetails = includeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Filter withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowercaseDetails")
    public FilterLowercaseDetails lowercaseDetails;
    public Filter withLowercaseDetails(FilterLowercaseDetails lowercaseDetails) {
        this.lowercaseDetails = lowercaseDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Filter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLink")
    public FilterParentLink parentLink;
    public Filter withParentLink(FilterParentLink parentLink) {
        this.parentLink = parentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchAndReplaceDetails")
    public FilterSearchAndReplaceDetails searchAndReplaceDetails;
    public Filter withSearchAndReplaceDetails(FilterSearchAndReplaceDetails searchAndReplaceDetails) {
        this.searchAndReplaceDetails = searchAndReplaceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Filter withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Filter withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Filter withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uppercaseDetails")
    public FilterUppercaseDetails uppercaseDetails;
    public Filter withUppercaseDetails(FilterUppercaseDetails uppercaseDetails) {
        this.uppercaseDetails = uppercaseDetails;
        return this;
    }
}