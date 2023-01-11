package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContributorCollectionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contributor_id")
    public String contributorId;
    public GetContributorCollectionsListPathParams withContributorId(String contributorId) {
        this.contributorId = contributorId;
        return this;
    }
}