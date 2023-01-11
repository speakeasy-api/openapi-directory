package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContributorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contributor_id")
    public String contributorId;
    public GetContributorPathParams withContributorId(String contributorId) {
        this.contributorId = contributorId;
        return this;
    }
}