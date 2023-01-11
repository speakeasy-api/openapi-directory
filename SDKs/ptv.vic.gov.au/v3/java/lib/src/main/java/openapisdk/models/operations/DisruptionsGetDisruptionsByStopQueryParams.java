package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionsByStopQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DisruptionsGetDisruptionsByStopQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disruption_status")
    public DisruptionsGetDisruptionsByStopDisruptionStatusEnum disruptionStatus;
    public DisruptionsGetDisruptionsByStopQueryParams withDisruptionStatus(DisruptionsGetDisruptionsByStopDisruptionStatusEnum disruptionStatus) {
        this.disruptionStatus = disruptionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DisruptionsGetDisruptionsByStopQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DisruptionsGetDisruptionsByStopQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}