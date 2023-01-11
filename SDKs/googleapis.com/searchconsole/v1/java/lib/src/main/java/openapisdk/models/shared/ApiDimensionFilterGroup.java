package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiDimensionFilterGroup
 * A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
**/
public class ApiDimensionFilterGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ApiDimensionFilter[] filters;
    public ApiDimensionFilterGroup withFilters(ApiDimensionFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupType")
    public ApiDimensionFilterGroupGroupTypeEnum groupType;
    public ApiDimensionFilterGroup withGroupType(ApiDimensionFilterGroupGroupTypeEnum groupType) {
        this.groupType = groupType;
        return this;
    }
}