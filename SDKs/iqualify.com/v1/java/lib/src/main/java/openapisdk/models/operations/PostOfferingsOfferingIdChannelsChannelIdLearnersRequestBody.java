package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
}