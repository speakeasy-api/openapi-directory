package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetAllDisruptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DisruptionsGetAllDisruptionsQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disruption_modes")
    public Integer[] disruptionModes;
    public DisruptionsGetAllDisruptionsQueryParams withDisruptionModes(Integer[] disruptionModes) {
        this.disruptionModes = disruptionModes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disruption_status")
    public DisruptionsGetAllDisruptionsDisruptionStatusEnum disruptionStatus;
    public DisruptionsGetAllDisruptionsQueryParams withDisruptionStatus(DisruptionsGetAllDisruptionsDisruptionStatusEnum disruptionStatus) {
        this.disruptionStatus = disruptionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=route_types")
    public Integer[] routeTypes;
    public DisruptionsGetAllDisruptionsQueryParams withRouteTypes(Integer[] routeTypes) {
        this.routeTypes = routeTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DisruptionsGetAllDisruptionsQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DisruptionsGetAllDisruptionsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}