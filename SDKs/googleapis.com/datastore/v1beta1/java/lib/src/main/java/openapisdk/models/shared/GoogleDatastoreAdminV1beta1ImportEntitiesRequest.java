package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDatastoreAdminV1beta1ImportEntitiesRequest
 * The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.
**/
public class GoogleDatastoreAdminV1beta1ImportEntitiesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityFilter")
    public GoogleDatastoreAdminV1beta1EntityFilter entityFilter;
    public GoogleDatastoreAdminV1beta1ImportEntitiesRequest withEntityFilter(GoogleDatastoreAdminV1beta1EntityFilter entityFilter) {
        this.entityFilter = entityFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUrl")
    public String inputUrl;
    public GoogleDatastoreAdminV1beta1ImportEntitiesRequest withInputUrl(String inputUrl) {
        this.inputUrl = inputUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleDatastoreAdminV1beta1ImportEntitiesRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}