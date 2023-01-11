package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PatternsGetPatternByRunQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_utc")
    public OffsetDateTime dateUtc;
    public PatternsGetPatternByRunQueryParams withDateUtc(OffsetDateTime dateUtc) {
        this.dateUtc = dateUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public PatternsGetPatternByRunQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public PatternsGetPatternByRunExpandEnum[] expand;
    public PatternsGetPatternByRunQueryParams withExpand(PatternsGetPatternByRunExpandEnum[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_geopath")
    public Boolean includeGeopath;
    public PatternsGetPatternByRunQueryParams withIncludeGeopath(Boolean includeGeopath) {
        this.includeGeopath = includeGeopath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_skipped_stops")
    public Boolean includeSkippedStops;
    public PatternsGetPatternByRunQueryParams withIncludeSkippedStops(Boolean includeSkippedStops) {
        this.includeSkippedStops = includeSkippedStops;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public PatternsGetPatternByRunQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_id")
    public Integer stopId;
    public PatternsGetPatternByRunQueryParams withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public PatternsGetPatternByRunQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}