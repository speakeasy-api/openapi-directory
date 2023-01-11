package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVodRegionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public DeleteVodRegionPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public DeleteVodRegionPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}