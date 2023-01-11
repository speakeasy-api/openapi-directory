package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemAdvisoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventory_id")
    public String inventoryId;
    public ExportSystemAdvisoriesPathParams withInventoryId(String inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    }
}