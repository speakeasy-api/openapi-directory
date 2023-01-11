package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAddressAutocompleteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Input")
    public String input;
    public PostAddressAutocompleteRequestBody withInput(String input) {
        this.input = input;
        return this;
    }
}