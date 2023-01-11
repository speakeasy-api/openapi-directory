package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPhoneEnrichRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phone")
    public String phone;
    public PostPhoneEnrichRequestBody withPhone(String phone) {
        this.phone = phone;
        return this;
    }
}