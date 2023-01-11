package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IsDescendantOfUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId1")
    public String accId1;
    public IsDescendantOfUsingGetPathParams withAccId1(String accId1) {
        this.accId1 = accId1;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId2")
    public String accId2;
    public IsDescendantOfUsingGetPathParams withAccId2(String accId2) {
        this.accId2 = accId2;
        return this;
    }
}