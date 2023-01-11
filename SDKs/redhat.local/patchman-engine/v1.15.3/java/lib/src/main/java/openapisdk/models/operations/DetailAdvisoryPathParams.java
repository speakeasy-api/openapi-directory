package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetailAdvisoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advisory_id")
    public String advisoryId;
    public DetailAdvisoryPathParams withAdvisoryId(String advisoryId) {
        this.advisoryId = advisoryId;
        return this;
    }
}