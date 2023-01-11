package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1GcsFolderDestination
 * Export folder destination of the data.
**/
public class GoogleCloudDatalabelingV1beta1GcsFolderDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputFolderUri")
    public String outputFolderUri;
    public GoogleCloudDatalabelingV1beta1GcsFolderDestination withOutputFolderUri(String outputFolderUri) {
        this.outputFolderUri = outputFolderUri;
        return this;
    }
}