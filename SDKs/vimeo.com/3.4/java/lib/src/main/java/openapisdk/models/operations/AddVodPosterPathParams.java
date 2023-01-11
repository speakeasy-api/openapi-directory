package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVodPosterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public AddVodPosterPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}