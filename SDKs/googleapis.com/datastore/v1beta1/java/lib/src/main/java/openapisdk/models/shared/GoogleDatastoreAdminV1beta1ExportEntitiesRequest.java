package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDatastoreAdminV1beta1ExportEntitiesRequest
 * The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
**/
public class GoogleDatastoreAdminV1beta1ExportEntitiesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityFilter")
    public GoogleDatastoreAdminV1beta1EntityFilter entityFilter;
    public GoogleDatastoreAdminV1beta1ExportEntitiesRequest withEntityFilter(GoogleDatastoreAdminV1beta1EntityFilter entityFilter) {
        this.entityFilter = entityFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleDatastoreAdminV1beta1ExportEntitiesRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUrlPrefix")
    public String outputUrlPrefix;
    public GoogleDatastoreAdminV1beta1ExportEntitiesRequest withOutputUrlPrefix(String outputUrlPrefix) {
        this.outputUrlPrefix = outputUrlPrefix;
        return this;
    }
}