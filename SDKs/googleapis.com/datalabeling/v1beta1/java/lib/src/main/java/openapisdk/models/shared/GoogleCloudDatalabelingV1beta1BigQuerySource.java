package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1BigQuerySource
 * The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.
**/
public class GoogleCloudDatalabelingV1beta1BigQuerySource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUri")
    public String inputUri;
    public GoogleCloudDatalabelingV1beta1BigQuerySource withInputUri(String inputUri) {
        this.inputUri = inputUri;
        return this;
    }
}