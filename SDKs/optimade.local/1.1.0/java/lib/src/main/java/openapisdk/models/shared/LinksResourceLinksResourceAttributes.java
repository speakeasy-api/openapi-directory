package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinksResourceLinksResourceAttributes
 * Links endpoint resource object attributes
**/
public class LinksResourceLinksResourceAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregate")
    public java.util.Map<String, Object> aggregate;
    public LinksResourceLinksResourceAttributes withAggregate(java.util.Map<String, Object> aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    @JsonProperty("base_url")
    public Object baseUrl;
    public LinksResourceLinksResourceAttributes withBaseUrl(Object baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public LinksResourceLinksResourceAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("homepage")
    public Object homepage;
    public LinksResourceLinksResourceAttributes withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonProperty("link_type")
    public java.util.Map<String, Object> linkType;
    public LinksResourceLinksResourceAttributes withLinkType(java.util.Map<String, Object> linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LinksResourceLinksResourceAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_aggregate_reason")
    public String noAggregateReason;
    public LinksResourceLinksResourceAttributes withNoAggregateReason(String noAggregateReason) {
        this.noAggregateReason = noAggregateReason;
        return this;
    }
}