package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefreshDataSourceRequest
 * Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
**/
public class RefreshDataSourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public RefreshDataSourceRequest withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public RefreshDataSourceRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAll")
    public Boolean isAll;
    public RefreshDataSourceRequest withIsAll(Boolean isAll) {
        this.isAll = isAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public DataSourceObjectReferences references;
    public RefreshDataSourceRequest withReferences(DataSourceObjectReferences references) {
        this.references = references;
        return this;
    }
}