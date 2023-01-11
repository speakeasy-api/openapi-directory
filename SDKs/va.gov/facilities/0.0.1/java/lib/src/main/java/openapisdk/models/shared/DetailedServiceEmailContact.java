package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetailedServiceEmailContact
 * Email contact information.
**/
public class DetailedServiceEmailContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address")
    public String emailAddress;
    public DetailedServiceEmailContact withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_label")
    public String emailLabel;
    public DetailedServiceEmailContact withEmailLabel(String emailLabel) {
        this.emailLabel = emailLabel;
        return this;
    }
}