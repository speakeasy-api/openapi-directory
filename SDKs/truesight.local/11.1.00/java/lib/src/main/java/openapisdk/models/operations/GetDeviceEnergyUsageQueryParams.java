package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceEnergyUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=basis")
    public GetDeviceEnergyUsageBasisEnum basis;
    public GetDeviceEnergyUsageQueryParams withBasis(GetDeviceEnergyUsageBasisEnum basis) {
        this.basis = basis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rollPeriod")
    public GetDeviceEnergyUsageRollPeriodEnum rollPeriod;
    public GetDeviceEnergyUsageQueryParams withRollPeriod(GetDeviceEnergyUsageRollPeriodEnum rollPeriod) {
        this.rollPeriod = rollPeriod;
        return this;
    }
}