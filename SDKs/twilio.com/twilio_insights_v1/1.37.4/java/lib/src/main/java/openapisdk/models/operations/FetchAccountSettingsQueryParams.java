package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAccountSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubaccountSid")
    public String subaccountSid;
    public FetchAccountSettingsQueryParams withSubaccountSid(String subaccountSid) {
        this.subaccountSid = subaccountSid;
        return this;
    }
}