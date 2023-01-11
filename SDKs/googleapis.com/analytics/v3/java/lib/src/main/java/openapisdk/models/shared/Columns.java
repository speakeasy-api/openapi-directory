package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Columns
 * Lists columns (dimensions and metrics) for a particular report type.
**/
public class Columns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeNames")
    public String[] attributeNames;
    public Columns withAttributeNames(String[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Columns withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Column[] items;
    public Columns withItems(Column[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Columns withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public Columns withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}