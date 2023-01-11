package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSystemAdvisoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventory_id")
    public String inventoryId;
    public ListSystemAdvisoriesPathParams withInventoryId(String inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    }
}