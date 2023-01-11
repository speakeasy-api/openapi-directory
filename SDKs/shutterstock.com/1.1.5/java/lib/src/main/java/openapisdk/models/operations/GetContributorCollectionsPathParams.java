package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContributorCollectionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contributor_id")
    public String contributorId;
    public GetContributorCollectionsPathParams withContributorId(String contributorId) {
        this.contributorId = contributorId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetContributorCollectionsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}