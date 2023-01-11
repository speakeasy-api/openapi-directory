package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionValue
 * Represents a DimensionValue resource.
**/
public class DimensionValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionName")
    public String dimensionName;
    public DimensionValue withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DimensionValue withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DimensionValue withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DimensionValue withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchType")
    public DimensionValueMatchTypeEnum matchType;
    public DimensionValue withMatchType(DimensionValueMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DimensionValue withValue(String value) {
        this.value = value;
        return this;
    }
}