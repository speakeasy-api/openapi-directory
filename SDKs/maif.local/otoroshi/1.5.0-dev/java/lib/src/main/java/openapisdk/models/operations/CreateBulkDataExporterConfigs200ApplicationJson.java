package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBulkDataExporterConfigs200ApplicationJson
 * The bulk response
**/
public class CreateBulkDataExporterConfigs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Boolean created;
    public CreateBulkDataExporterConfigs200ApplicationJson withCreated(Boolean created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Boolean id;
    public CreateBulkDataExporterConfigs200ApplicationJson withId(Boolean id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum status;
    public CreateBulkDataExporterConfigs200ApplicationJson withStatus(CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}