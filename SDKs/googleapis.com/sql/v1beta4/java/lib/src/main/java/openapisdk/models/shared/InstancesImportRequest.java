package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesImportRequest
 * Database instance import request.
**/
public class InstancesImportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importContext")
    public ImportContext importContext;
    public InstancesImportRequest withImportContext(ImportContext importContext) {
        this.importContext = importContext;
        return this;
    }
}