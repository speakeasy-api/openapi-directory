package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsWithinOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetIntersectionsWithinOutputFormatQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDegree")
    public Long maxDegree;
    public GetIntersectionsWithinOutputFormatQueryParams withMaxDegree(Long maxDegree) {
        this.maxDegree = maxDegree;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetIntersectionsWithinOutputFormatQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDegree")
    public Long minDegree;
    public GetIntersectionsWithinOutputFormatQueryParams withMinDegree(Long minDegree) {
        this.minDegree = minDegree;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetIntersectionsWithinOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
}