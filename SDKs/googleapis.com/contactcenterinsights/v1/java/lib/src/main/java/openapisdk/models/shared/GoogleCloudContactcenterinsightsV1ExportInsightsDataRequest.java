package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest
 * The request to export insights.
**/
public class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigQueryDestination")
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination bigQueryDestination;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest withBigQueryDestination(GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination bigQueryDestination) {
        this.bigQueryDestination = bigQueryDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeDisposition")
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum writeDisposition;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest withWriteDisposition(GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum writeDisposition) {
        this.writeDisposition = writeDisposition;
        return this;
    }
}