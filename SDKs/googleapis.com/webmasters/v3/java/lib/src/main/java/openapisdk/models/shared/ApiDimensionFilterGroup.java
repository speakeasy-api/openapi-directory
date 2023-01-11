package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

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
    public String groupType;
    public ApiDimensionFilterGroup withGroupType(String groupType) {
        this.groupType = groupType;
        return this;
    }
}