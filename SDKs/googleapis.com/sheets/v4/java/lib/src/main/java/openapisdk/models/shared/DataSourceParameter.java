package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceParameter
 * A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
**/
public class DataSourceParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DataSourceParameter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRangeId")
    public String namedRangeId;
    public DataSourceParameter withNamedRangeId(String namedRangeId) {
        this.namedRangeId = namedRangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public DataSourceParameter withRange(GridRange range) {
        this.range = range;
        return this;
    }
}