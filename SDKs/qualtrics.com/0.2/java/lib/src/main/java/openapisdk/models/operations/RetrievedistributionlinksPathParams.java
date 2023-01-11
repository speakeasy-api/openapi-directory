package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrievedistributionlinksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public RetrievedistributionlinksPathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
}