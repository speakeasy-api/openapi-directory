package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class RunsForRunQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_utc")
    public OffsetDateTime dateUtc;
    public RunsForRunQueryParams withDateUtc(OffsetDateTime dateUtc) {
        this.dateUtc = dateUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public RunsForRunQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public RunsForRunExpandEnum[] expand;
    public RunsForRunQueryParams withExpand(RunsForRunExpandEnum[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_geopath")
    public Boolean includeGeopath;
    public RunsForRunQueryParams withIncludeGeopath(Boolean includeGeopath) {
        this.includeGeopath = includeGeopath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public RunsForRunQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public RunsForRunQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}