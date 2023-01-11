package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVVersionAreasAreaIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=area_Ids")
    public String areaIds;
    public GetVVersionAreasAreaIdsPathParams withAreaIds(String areaIds) {
        this.areaIds = areaIds;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetVVersionAreasAreaIdsPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}