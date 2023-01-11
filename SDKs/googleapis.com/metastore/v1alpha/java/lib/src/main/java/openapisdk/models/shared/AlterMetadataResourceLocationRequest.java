package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlterMetadataResourceLocationRequest
 * Request message for DataprocMetastore.AlterMetadataResourceLocation.
**/
public class AlterMetadataResourceLocationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationUri")
    public String locationUri;
    public AlterMetadataResourceLocationRequest withLocationUri(String locationUri) {
        this.locationUri = locationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public AlterMetadataResourceLocationRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}