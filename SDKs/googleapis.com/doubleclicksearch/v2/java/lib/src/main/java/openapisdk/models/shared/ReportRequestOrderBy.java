package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportRequestOrderBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column")
    public ReportApiColumnSpec column;
    public ReportRequestOrderBy withColumn(ReportApiColumnSpec column) {
        this.column = column;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public String sortOrder;
    public ReportRequestOrderBy withSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}