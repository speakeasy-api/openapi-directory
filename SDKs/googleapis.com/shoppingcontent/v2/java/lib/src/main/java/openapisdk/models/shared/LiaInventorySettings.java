package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiaInventorySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryVerificationContactEmail")
    public String inventoryVerificationContactEmail;
    public LiaInventorySettings withInventoryVerificationContactEmail(String inventoryVerificationContactEmail) {
        this.inventoryVerificationContactEmail = inventoryVerificationContactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryVerificationContactName")
    public String inventoryVerificationContactName;
    public LiaInventorySettings withInventoryVerificationContactName(String inventoryVerificationContactName) {
        this.inventoryVerificationContactName = inventoryVerificationContactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryVerificationContactStatus")
    public String inventoryVerificationContactStatus;
    public LiaInventorySettings withInventoryVerificationContactStatus(String inventoryVerificationContactStatus) {
        this.inventoryVerificationContactStatus = inventoryVerificationContactStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public LiaInventorySettings withStatus(String status) {
        this.status = status;
        return this;
    }
}