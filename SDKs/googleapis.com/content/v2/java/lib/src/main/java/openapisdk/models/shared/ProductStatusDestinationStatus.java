package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductStatusDestinationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalPending")
    public Boolean approvalPending;
    public ProductStatusDestinationStatus withApprovalPending(Boolean approvalPending) {
        this.approvalPending = approvalPending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalStatus")
    public String approvalStatus;
    public ProductStatusDestinationStatus withApprovalStatus(String approvalStatus) {
        this.approvalStatus = approvalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public ProductStatusDestinationStatus withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intention")
    public String intention;
    public ProductStatusDestinationStatus withIntention(String intention) {
        this.intention = intention;
        return this;
    }
}