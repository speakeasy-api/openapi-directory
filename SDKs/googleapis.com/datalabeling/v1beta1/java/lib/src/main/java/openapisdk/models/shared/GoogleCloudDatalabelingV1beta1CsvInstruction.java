package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1CsvInstruction
 * Deprecated: this instruction format is not supported any more. Instruction from a CSV file.
**/
public class GoogleCloudDatalabelingV1beta1CsvInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsFileUri")
    public String gcsFileUri;
    public GoogleCloudDatalabelingV1beta1CsvInstruction withGcsFileUri(String gcsFileUri) {
        this.gcsFileUri = gcsFileUri;
        return this;
    }
}