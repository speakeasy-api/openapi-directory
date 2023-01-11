package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnsampledReportDriveDownloadDetails
 * Download details for a file stored in Google Drive.
**/
public class UnsampledReportDriveDownloadDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentId")
    public String documentId;
    public UnsampledReportDriveDownloadDetails withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
}