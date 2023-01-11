package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchSavedColumnsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DoubleclicksearchSavedColumnsListPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agencyId")
    public String agencyId;
    public DoubleclicksearchSavedColumnsListPathParams withAgencyId(String agencyId) {
        this.agencyId = agencyId;
        return this;
    }
}