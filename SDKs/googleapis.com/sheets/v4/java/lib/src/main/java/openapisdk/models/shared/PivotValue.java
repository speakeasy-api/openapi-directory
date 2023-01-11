package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotValue
 * The definition of how a value in a pivot table should be calculated.
**/
public class PivotValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calculatedDisplayType")
    public PivotValueCalculatedDisplayTypeEnum calculatedDisplayType;
    public PivotValue withCalculatedDisplayType(PivotValueCalculatedDisplayTypeEnum calculatedDisplayType) {
        this.calculatedDisplayType = calculatedDisplayType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceColumnReference")
    public DataSourceColumnReference dataSourceColumnReference;
    public PivotValue withDataSourceColumnReference(DataSourceColumnReference dataSourceColumnReference) {
        this.dataSourceColumnReference = dataSourceColumnReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formula")
    public String formula;
    public PivotValue withFormula(String formula) {
        this.formula = formula;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PivotValue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceColumnOffset")
    public Integer sourceColumnOffset;
    public PivotValue withSourceColumnOffset(Integer sourceColumnOffset) {
        this.sourceColumnOffset = sourceColumnOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summarizeFunction")
    public PivotValueSummarizeFunctionEnum summarizeFunction;
    public PivotValue withSummarizeFunction(PivotValueSummarizeFunctionEnum summarizeFunction) {
        this.summarizeFunction = summarizeFunction;
        return this;
    }
}