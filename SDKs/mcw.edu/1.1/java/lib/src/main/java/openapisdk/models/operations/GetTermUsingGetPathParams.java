package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTermUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetTermUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
}