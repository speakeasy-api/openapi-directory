package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class DeparturesGetForStopQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_utc")
    public OffsetDateTime dateUtc;
    public DeparturesGetForStopQueryParams withDateUtc(OffsetDateTime dateUtc) {
        this.dateUtc = dateUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DeparturesGetForStopQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction_id")
    public Integer directionId;
    public DeparturesGetForStopQueryParams withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public DeparturesGetForStopExpandEnum[] expand;
    public DeparturesGetForStopQueryParams withExpand(DeparturesGetForStopExpandEnum[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gtfs")
    public Boolean gtfs;
    public DeparturesGetForStopQueryParams withGtfs(Boolean gtfs) {
        this.gtfs = gtfs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_cancelled")
    public Boolean includeCancelled;
    public DeparturesGetForStopQueryParams withIncludeCancelled(Boolean includeCancelled) {
        this.includeCancelled = includeCancelled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_geopath")
    public Boolean includeGeopath;
    public DeparturesGetForStopQueryParams withIncludeGeopath(Boolean includeGeopath) {
        this.includeGeopath = includeGeopath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=look_backwards")
    public Boolean lookBackwards;
    public DeparturesGetForStopQueryParams withLookBackwards(Boolean lookBackwards) {
        this.lookBackwards = lookBackwards;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_results")
    public Integer maxResults;
    public DeparturesGetForStopQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platform_numbers")
    public Integer[] platformNumbers;
    public DeparturesGetForStopQueryParams withPlatformNumbers(Integer[] platformNumbers) {
        this.platformNumbers = platformNumbers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DeparturesGetForStopQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DeparturesGetForStopQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}