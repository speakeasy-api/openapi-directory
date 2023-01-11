package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDuplicatesResponse
 * The result of removing duplicates in a range.
**/
public class DeleteDuplicatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicatesRemovedCount")
    public Integer duplicatesRemovedCount;
    public DeleteDuplicatesResponse withDuplicatesRemovedCount(Integer duplicatesRemovedCount) {
        this.duplicatesRemovedCount = duplicatesRemovedCount;
        return this;
    }
}