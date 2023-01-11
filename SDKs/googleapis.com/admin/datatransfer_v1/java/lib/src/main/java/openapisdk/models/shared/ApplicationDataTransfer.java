package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationDataTransfer
 * Template to map fields of ApplicationDataTransfer resource.
**/
public class ApplicationDataTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationId")
    public String applicationId;
    public ApplicationDataTransfer withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationTransferParams")
    public ApplicationTransferParam[] applicationTransferParams;
    public ApplicationDataTransfer withApplicationTransferParams(ApplicationTransferParam[] applicationTransferParams) {
        this.applicationTransferParams = applicationTransferParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationTransferStatus")
    public String applicationTransferStatus;
    public ApplicationDataTransfer withApplicationTransferStatus(String applicationTransferStatus) {
        this.applicationTransferStatus = applicationTransferStatus;
        return this;
    }
}