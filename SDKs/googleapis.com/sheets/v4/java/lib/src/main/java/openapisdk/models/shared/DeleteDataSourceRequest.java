package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDataSourceRequest
 * Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
**/
public class DeleteDataSourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public DeleteDataSourceRequest withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
}