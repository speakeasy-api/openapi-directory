package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1PdfInstruction
 * Instruction from a PDF file.
**/
public class GoogleCloudDatalabelingV1beta1PdfInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsFileUri")
    public String gcsFileUri;
    public GoogleCloudDatalabelingV1beta1PdfInstruction withGcsFileUri(String gcsFileUri) {
        this.gcsFileUri = gcsFileUri;
        return this;
    }
}