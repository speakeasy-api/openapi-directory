package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllAnnotatedGenesUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetAllAnnotatedGenesUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
}