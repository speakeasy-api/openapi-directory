package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportRequestFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column")
    public ReportApiColumnSpec column;
    public ReportRequestFilters withColumn(ReportApiColumnSpec column) {
        this.column = column;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public String operator;
    public ReportRequestFilters withOperator(String operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public Object[] values;
    public ReportRequestFilters withValues(Object[] values) {
        this.values = values;
        return this;
    }
}