package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotGroupSortValueBucket
 * Information about which values in a pivot group should be used for sorting.
**/
public class PivotGroupSortValueBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public ExtendedValue[] buckets;
    public PivotGroupSortValueBucket withBuckets(ExtendedValue[] buckets) {
        this.buckets = buckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valuesIndex")
    public Integer valuesIndex;
    public PivotGroupSortValueBucket withValuesIndex(Integer valuesIndex) {
        this.valuesIndex = valuesIndex;
        return this;
    }
}