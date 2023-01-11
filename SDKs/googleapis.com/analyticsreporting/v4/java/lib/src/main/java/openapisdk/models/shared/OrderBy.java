package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderBy
 * Specifies the sorting options.
**/
public class OrderBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldName")
    public String fieldName;
    public OrderBy withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderType")
    public OrderByOrderTypeEnum orderType;
    public OrderBy withOrderType(OrderByOrderTypeEnum orderType) {
        this.orderType = orderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public OrderBySortOrderEnum sortOrder;
    public OrderBy withSortOrder(OrderBySortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}