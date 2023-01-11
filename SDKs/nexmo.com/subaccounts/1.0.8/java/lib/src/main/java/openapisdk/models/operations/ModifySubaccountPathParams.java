package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifySubaccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public ModifySubaccountPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subaccount_key")
    public String subaccountKey;
    public ModifySubaccountPathParams withSubaccountKey(String subaccountKey) {
        this.subaccountKey = subaccountKey;
        return this;
    }
}