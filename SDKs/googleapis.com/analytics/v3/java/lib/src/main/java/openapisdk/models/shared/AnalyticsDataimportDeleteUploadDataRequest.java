package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyticsDataimportDeleteUploadDataRequest
 * Request template for the delete upload data request.
**/
public class AnalyticsDataimportDeleteUploadDataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDataImportUids")
    public String[] customDataImportUids;
    public AnalyticsDataimportDeleteUploadDataRequest withCustomDataImportUids(String[] customDataImportUids) {
        this.customDataImportUids = customDataImportUids;
        return this;
    }
}