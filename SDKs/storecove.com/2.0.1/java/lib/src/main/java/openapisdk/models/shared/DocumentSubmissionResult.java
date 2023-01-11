package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentSubmissionResult
 * The result of a document submission
**/
public class DocumentSubmissionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;
    public DocumentSubmissionResult withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}