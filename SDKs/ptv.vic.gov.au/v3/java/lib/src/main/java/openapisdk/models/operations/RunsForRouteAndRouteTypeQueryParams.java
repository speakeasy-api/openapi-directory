package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class RunsForRouteAndRouteTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_utc")
    public OffsetDateTime dateUtc;
    public RunsForRouteAndRouteTypeQueryParams withDateUtc(OffsetDateTime dateUtc) {
        this.dateUtc = dateUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public RunsForRouteAndRouteTypeQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public RunsForRouteAndRouteTypeExpandEnum[] expand;
    public RunsForRouteAndRouteTypeQueryParams withExpand(RunsForRouteAndRouteTypeExpandEnum[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public RunsForRouteAndRouteTypeQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public RunsForRouteAndRouteTypeQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}