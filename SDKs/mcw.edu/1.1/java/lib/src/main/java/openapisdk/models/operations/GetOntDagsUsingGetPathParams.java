package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntDagsUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetOntDagsUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
}