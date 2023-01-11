package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsNearOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDegree")
    public Long maxDegree;
    public GetIntersectionsNearOutputFormatQueryParams withMaxDegree(Long maxDegree) {
        this.maxDegree = maxDegree;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDistance")
    public Long maxDistance;
    public GetIntersectionsNearOutputFormatQueryParams withMaxDistance(Long maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetIntersectionsNearOutputFormatQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDegree")
    public Long minDegree;
    public GetIntersectionsNearOutputFormatQueryParams withMinDegree(Long minDegree) {
        this.minDegree = minDegree;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetIntersectionsNearOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String point;
    public GetIntersectionsNearOutputFormatQueryParams withPoint(String point) {
        this.point = point;
        return this;
    }
}