package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionsByRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DisruptionsGetDisruptionsByRouteQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disruption_status")
    public DisruptionsGetDisruptionsByRouteDisruptionStatusEnum disruptionStatus;
    public DisruptionsGetDisruptionsByRouteQueryParams withDisruptionStatus(DisruptionsGetDisruptionsByRouteDisruptionStatusEnum disruptionStatus) {
        this.disruptionStatus = disruptionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DisruptionsGetDisruptionsByRouteQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DisruptionsGetDisruptionsByRouteQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}