package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicUpdateSubscriptionStatusRequest
 * A request to change the status of a contact's subscription.
**/
public class PublicUpdateSubscriptionStatusRequest {
    @JsonProperty("emailAddress")
    public String emailAddress;
    public PublicUpdateSubscriptionStatusRequest withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalBasis")
    public PublicUpdateSubscriptionStatusRequestLegalBasisEnum legalBasis;
    public PublicUpdateSubscriptionStatusRequest withLegalBasis(PublicUpdateSubscriptionStatusRequestLegalBasisEnum legalBasis) {
        this.legalBasis = legalBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalBasisExplanation")
    public String legalBasisExplanation;
    public PublicUpdateSubscriptionStatusRequest withLegalBasisExplanation(String legalBasisExplanation) {
        this.legalBasisExplanation = legalBasisExplanation;
        return this;
    }
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public PublicUpdateSubscriptionStatusRequest withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}