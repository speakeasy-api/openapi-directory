package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LinkConfirmationRequestConfirmation {
    @JsonProperty("linkRefNumber")
    public String linkRefNumber;
    public LinkConfirmationRequestConfirmation withLinkRefNumber(String linkRefNumber) {
        this.linkRefNumber = linkRefNumber;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public LinkConfirmationRequestConfirmation withToken(String token) {
        this.token = token;
        return this;
    }
}