package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBulkDataExporterConfig200ApplicationJson
 * The bulk response
**/
public class UpdateBulkDataExporterConfig200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Boolean id;
    public UpdateBulkDataExporterConfig200ApplicationJson withId(Boolean id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum status;
    public UpdateBulkDataExporterConfig200ApplicationJson withStatus(UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public Boolean updated;
    public UpdateBulkDataExporterConfig200ApplicationJson withUpdated(Boolean updated) {
        this.updated = updated;
        return this;
    }
}