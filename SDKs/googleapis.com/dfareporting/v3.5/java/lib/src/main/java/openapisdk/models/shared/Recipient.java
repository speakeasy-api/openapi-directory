package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Recipient
 * Represents a recipient.
**/
public class Recipient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryType")
    public RecipientDeliveryTypeEnum deliveryType;
    public Recipient withDeliveryType(RecipientDeliveryTypeEnum deliveryType) {
        this.deliveryType = deliveryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Recipient withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Recipient withKind(String kind) {
        this.kind = kind;
        return this;
    }
}