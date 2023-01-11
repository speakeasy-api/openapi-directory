package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchBulkDataExporterConfig200ApplicationJson
 * The bulk response
**/
public class PatchBulkDataExporterConfig200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Boolean id;
    public PatchBulkDataExporterConfig200ApplicationJson withId(Boolean id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PatchBulkDataExporterConfig200ApplicationJsonStatusEnum status;
    public PatchBulkDataExporterConfig200ApplicationJson withStatus(PatchBulkDataExporterConfig200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public Boolean updated;
    public PatchBulkDataExporterConfig200ApplicationJson withUpdated(Boolean updated) {
        this.updated = updated;
        return this;
    }
}