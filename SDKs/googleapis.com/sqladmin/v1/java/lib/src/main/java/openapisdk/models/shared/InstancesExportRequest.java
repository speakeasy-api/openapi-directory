package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesExportRequest
 * Database instance export request.
**/
public class InstancesExportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportContext")
    public ExportContext exportContext;
    public InstancesExportRequest withExportContext(ExportContext exportContext) {
        this.exportContext = exportContext;
        return this;
    }
}