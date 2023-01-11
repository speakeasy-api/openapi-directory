package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkMuteFindingsRequest
 * Request message for bulk findings update. Note: 1. If multiple bulk update requests match the same resource, the order in which they get executed is not defined. 2. Once a bulk operation is started, there is no way to stop it.
**/
public class BulkMuteFindingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public BulkMuteFindingsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("muteAnnotation")
    public String muteAnnotation;
    public BulkMuteFindingsRequest withMuteAnnotation(String muteAnnotation) {
        this.muteAnnotation = muteAnnotation;
        return this;
    }
}