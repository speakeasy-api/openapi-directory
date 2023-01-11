package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceColumn
 * A column in a data source.
**/
public class DataSourceColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formula")
    public String formula;
    public DataSourceColumn withFormula(String formula) {
        this.formula = formula;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public DataSourceColumnReference reference;
    public DataSourceColumn withReference(DataSourceColumnReference reference) {
        this.reference = reference;
        return this;
    }
}