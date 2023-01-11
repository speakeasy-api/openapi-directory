package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion
 * Version to downgrade to (if the network has firmware flexibility)
**/
public class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion withId(String id) {
        this.id = id;
        return this;
    }
}