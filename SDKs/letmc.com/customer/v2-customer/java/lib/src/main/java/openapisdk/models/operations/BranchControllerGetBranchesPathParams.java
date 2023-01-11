package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BranchControllerGetBranchesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public BranchControllerGetBranchesPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}