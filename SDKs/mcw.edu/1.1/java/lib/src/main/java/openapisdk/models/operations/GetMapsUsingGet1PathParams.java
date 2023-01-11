package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapsUsingGet1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetMapsUsingGet1PathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
}