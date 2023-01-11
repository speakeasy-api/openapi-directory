package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVoicesResponse
 * The message returned to the client by the `ListVoices` method.
**/
public class ListVoicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voices")
    public Voice[] voices;
    public ListVoicesResponse withVoices(Voice[] voices) {
        this.voices = voices;
        return this;
    }
}