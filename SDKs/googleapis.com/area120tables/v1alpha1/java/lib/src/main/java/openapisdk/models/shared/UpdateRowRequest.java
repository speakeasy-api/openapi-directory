package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRowRequest
 * Request message for TablesService.UpdateRow.
**/
public class UpdateRowRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row")
    public Row row;
    public UpdateRowRequest withRow(Row row) {
        this.row = row;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public UpdateRowRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public UpdateRowRequestViewEnum view;
    public UpdateRowRequest withView(UpdateRowRequestViewEnum view) {
        this.view = view;
        return this;
    }
}