package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OutletsGetOutletsByGeolocationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public OutletsGetOutletsByGeolocationQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_distance")
    public Double maxDistance;
    public OutletsGetOutletsByGeolocationQueryParams withMaxDistance(Double maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_results")
    public Integer maxResults;
    public OutletsGetOutletsByGeolocationQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public OutletsGetOutletsByGeolocationQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public OutletsGetOutletsByGeolocationQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}