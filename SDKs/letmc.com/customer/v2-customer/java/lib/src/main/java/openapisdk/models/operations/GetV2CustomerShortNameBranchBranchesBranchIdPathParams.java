package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV2CustomerShortNameBranchBranchesBranchIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchID")
    public String branchID;
    public GetV2CustomerShortNameBranchBranchesBranchIdPathParams withBranchId(String branchID) {
        this.branchID = branchID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public GetV2CustomerShortNameBranchBranchesBranchIdPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}