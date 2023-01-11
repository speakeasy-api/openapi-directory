package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeletebulkDataExporterConfig200ApplicationJson
 * The bulk response
**/
public class DeletebulkDataExporterConfig200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public DeletebulkDataExporterConfig200ApplicationJson withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Boolean id;
    public DeletebulkDataExporterConfig200ApplicationJson withId(Boolean id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DeletebulkDataExporterConfig200ApplicationJsonStatusEnum status;
    public DeletebulkDataExporterConfig200ApplicationJson withStatus(DeletebulkDataExporterConfig200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}