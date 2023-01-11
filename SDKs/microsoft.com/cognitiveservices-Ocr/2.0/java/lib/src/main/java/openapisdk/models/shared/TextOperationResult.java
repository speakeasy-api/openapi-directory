package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextOperationResult
 * Result of recognition text operation.
**/
public class TextOperationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognitionResult")
    public TextRecognitionResult recognitionResult;
    public TextOperationResult withRecognitionResult(TextRecognitionResult recognitionResult) {
        this.recognitionResult = recognitionResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OperationStatusEnum status;
    public TextOperationResult withStatus(OperationStatusEnum status) {
        this.status = status;
        return this;
    }
}