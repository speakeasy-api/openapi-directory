package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagingV1Deactivation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_to")
    public String redirectTo;
    public MessagingV1Deactivation withRedirectTo(String redirectTo) {
        this.redirectTo = redirectTo;
        return this;
    }
}