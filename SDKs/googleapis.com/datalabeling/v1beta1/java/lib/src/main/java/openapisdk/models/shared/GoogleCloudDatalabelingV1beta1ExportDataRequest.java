package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ExportDataRequest
 * Request message for ExportData API.
**/
public class GoogleCloudDatalabelingV1beta1ExportDataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotatedDataset")
    public String annotatedDataset;
    public GoogleCloudDatalabelingV1beta1ExportDataRequest withAnnotatedDataset(String annotatedDataset) {
        this.annotatedDataset = annotatedDataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudDatalabelingV1beta1ExportDataRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public GoogleCloudDatalabelingV1beta1OutputConfig outputConfig;
    public GoogleCloudDatalabelingV1beta1ExportDataRequest withOutputConfig(GoogleCloudDatalabelingV1beta1OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmailAddress")
    public String userEmailAddress;
    public GoogleCloudDatalabelingV1beta1ExportDataRequest withUserEmailAddress(String userEmailAddress) {
        this.userEmailAddress = userEmailAddress;
        return this;
    }
}