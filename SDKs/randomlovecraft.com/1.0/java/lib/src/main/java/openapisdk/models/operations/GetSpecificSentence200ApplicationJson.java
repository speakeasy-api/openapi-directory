package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSpecificSentence200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Sentence data;
    public GetSpecificSentence200ApplicationJson withData(openapisdk.models.shared.Sentence data) {
        this.data = data;
        return this;
    }
}