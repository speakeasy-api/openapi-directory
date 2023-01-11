package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRowRequest
 * Request message for TablesService.CreateRow.
**/
public class CreateRowRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public CreateRowRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row")
    public Row row;
    public CreateRowRequest withRow(Row row) {
        this.row = row;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public CreateRowRequestViewEnum view;
    public CreateRowRequest withView(CreateRowRequestViewEnum view) {
        this.view = view;
        return this;
    }
}