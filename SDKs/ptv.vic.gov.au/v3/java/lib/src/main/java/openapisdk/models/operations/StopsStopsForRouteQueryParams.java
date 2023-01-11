package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class StopsStopsForRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public StopsStopsForRouteQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction_id")
    public Integer directionId;
    public StopsStopsForRouteQueryParams withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geopath_utc")
    public OffsetDateTime geopathUtc;
    public StopsStopsForRouteQueryParams withGeopathUtc(OffsetDateTime geopathUtc) {
        this.geopathUtc = geopathUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_geopath")
    public Boolean includeGeopath;
    public StopsStopsForRouteQueryParams withIncludeGeopath(Boolean includeGeopath) {
        this.includeGeopath = includeGeopath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public StopsStopsForRouteQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_disruptions")
    public Boolean stopDisruptions;
    public StopsStopsForRouteQueryParams withStopDisruptions(Boolean stopDisruptions) {
        this.stopDisruptions = stopDisruptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public StopsStopsForRouteQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}