package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class DeparturesGetForStopAndRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_utc")
    public OffsetDateTime dateUtc;
    public DeparturesGetForStopAndRouteQueryParams withDateUtc(OffsetDateTime dateUtc) {
        this.dateUtc = dateUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DeparturesGetForStopAndRouteQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction_id")
    public Integer directionId;
    public DeparturesGetForStopAndRouteQueryParams withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public DeparturesGetForStopAndRouteExpandEnum[] expand;
    public DeparturesGetForStopAndRouteQueryParams withExpand(DeparturesGetForStopAndRouteExpandEnum[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gtfs")
    public Boolean gtfs;
    public DeparturesGetForStopAndRouteQueryParams withGtfs(Boolean gtfs) {
        this.gtfs = gtfs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_cancelled")
    public Boolean includeCancelled;
    public DeparturesGetForStopAndRouteQueryParams withIncludeCancelled(Boolean includeCancelled) {
        this.includeCancelled = includeCancelled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_geopath")
    public Boolean includeGeopath;
    public DeparturesGetForStopAndRouteQueryParams withIncludeGeopath(Boolean includeGeopath) {
        this.includeGeopath = includeGeopath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=look_backwards")
    public Boolean lookBackwards;
    public DeparturesGetForStopAndRouteQueryParams withLookBackwards(Boolean lookBackwards) {
        this.lookBackwards = lookBackwards;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_results")
    public Integer maxResults;
    public DeparturesGetForStopAndRouteQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DeparturesGetForStopAndRouteQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DeparturesGetForStopAndRouteQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}