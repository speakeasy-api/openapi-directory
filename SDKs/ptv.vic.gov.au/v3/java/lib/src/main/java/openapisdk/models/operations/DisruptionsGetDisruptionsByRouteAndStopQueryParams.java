package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionsByRouteAndStopQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DisruptionsGetDisruptionsByRouteAndStopQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disruption_status")
    public DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum disruptionStatus;
    public DisruptionsGetDisruptionsByRouteAndStopQueryParams withDisruptionStatus(DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum disruptionStatus) {
        this.disruptionStatus = disruptionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DisruptionsGetDisruptionsByRouteAndStopQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DisruptionsGetDisruptionsByRouteAndStopQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}