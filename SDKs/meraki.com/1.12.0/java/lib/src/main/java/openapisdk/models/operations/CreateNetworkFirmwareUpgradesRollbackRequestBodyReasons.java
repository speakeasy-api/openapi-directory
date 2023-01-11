package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons {
    @JsonProperty("category")
    public CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum category;
    public CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons withCategory(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("comment")
    public String comment;
    public CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons withComment(String comment) {
        this.comment = comment;
        return this;
    }
}