package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTerminationsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=circuit_id")
    public String circuitId;
    public CircuitsCircuitTerminationsListQueryParams withCircuitId(String circuitId) {
        this.circuitId = circuitId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CircuitsCircuitTerminationsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public CircuitsCircuitTerminationsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=port_speed")
    public Double portSpeed;
    public CircuitsCircuitTerminationsListQueryParams withPortSpeed(Double portSpeed) {
        this.portSpeed = portSpeed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public CircuitsCircuitTerminationsListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public CircuitsCircuitTerminationsListQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public CircuitsCircuitTerminationsListQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term_side")
    public String termSide;
    public CircuitsCircuitTerminationsListQueryParams withTermSide(String termSide) {
        this.termSide = termSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upstream_speed")
    public Double upstreamSpeed;
    public CircuitsCircuitTerminationsListQueryParams withUpstreamSpeed(Double upstreamSpeed) {
        this.upstreamSpeed = upstreamSpeed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=xconnect_id")
    public String xconnectId;
    public CircuitsCircuitTerminationsListQueryParams withXconnectId(String xconnectId) {
        this.xconnectId = xconnectId;
        return this;
    }
}