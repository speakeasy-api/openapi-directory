package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTileV2LocationsTilesZXYPbfGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAnalysis")
    public Boolean isAnalysis;
    public GetTileV2LocationsTilesZXYPbfGetQueryParams withIsAnalysis(Boolean isAnalysis) {
        this.isAnalysis = isAnalysis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isMobile")
    public Boolean isMobile;
    public GetTileV2LocationsTilesZXYPbfGetQueryParams withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastUpdatedFrom")
    public Object lastUpdatedFrom;
    public GetTileV2LocationsTilesZXYPbfGetQueryParams withLastUpdatedFrom(Object lastUpdatedFrom) {
        this.lastUpdatedFrom = lastUpdatedFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastUpdatedTo")
    public Object lastUpdatedTo;
    public GetTileV2LocationsTilesZXYPbfGetQueryParams withLastUpdatedTo(Object lastUpdatedTo) {
        this.lastUpdatedTo = lastUpdatedTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public Long[] location;
    public GetTileV2LocationsTilesZXYPbfGetQueryParams withLocation(Long[] location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter")
    public Object parameter;
    public GetTileV2LocationsTilesZXYPbfGetQueryParams withParameter(Object parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project")
    public Long project;
    public GetTileV2LocationsTilesZXYPbfGetQueryParams withProject(Long project) {
        this.project = project;
        return this;
    }
}