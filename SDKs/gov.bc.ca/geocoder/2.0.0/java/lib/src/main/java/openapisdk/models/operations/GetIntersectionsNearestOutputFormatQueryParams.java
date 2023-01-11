package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsNearestOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDegree")
    public Long maxDegree;
    public GetIntersectionsNearestOutputFormatQueryParams withMaxDegree(Long maxDegree) {
        this.maxDegree = maxDegree;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDistance")
    public Long maxDistance;
    public GetIntersectionsNearestOutputFormatQueryParams withMaxDistance(Long maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDegree")
    public Long minDegree;
    public GetIntersectionsNearestOutputFormatQueryParams withMinDegree(Long minDegree) {
        this.minDegree = minDegree;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetIntersectionsNearestOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String point;
    public GetIntersectionsNearestOutputFormatQueryParams withPoint(String point) {
        this.point = point;
        return this;
    }
}