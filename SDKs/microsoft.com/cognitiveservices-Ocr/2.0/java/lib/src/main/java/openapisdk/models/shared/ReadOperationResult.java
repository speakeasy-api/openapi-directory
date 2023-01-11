package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReadOperationResult
 * OCR result of the read operation.
**/
public class ReadOperationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognitionResults")
    public TextRecognitionResult[] recognitionResults;
    public ReadOperationResult withRecognitionResults(TextRecognitionResult[] recognitionResults) {
        this.recognitionResults = recognitionResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OperationStatusEnum status;
    public ReadOperationResult withStatus(OperationStatusEnum status) {
        this.status = status;
        return this;
    }
}