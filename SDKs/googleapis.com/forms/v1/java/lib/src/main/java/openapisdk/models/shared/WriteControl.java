package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WriteControl
 * Provides control over how write requests are executed.
**/
public class WriteControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredRevisionId")
    public String requiredRevisionId;
    public WriteControl withRequiredRevisionId(String requiredRevisionId) {
        this.requiredRevisionId = requiredRevisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetRevisionId")
    public String targetRevisionId;
    public WriteControl withTargetRevisionId(String targetRevisionId) {
        this.targetRevisionId = targetRevisionId;
        return this;
    }
}