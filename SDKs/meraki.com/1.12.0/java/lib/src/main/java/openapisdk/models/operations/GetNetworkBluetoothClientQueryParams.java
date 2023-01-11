package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkBluetoothClientQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=connectivityHistoryTimespan")
    public Long connectivityHistoryTimespan;
    public GetNetworkBluetoothClientQueryParams withConnectivityHistoryTimespan(Long connectivityHistoryTimespan) {
        this.connectivityHistoryTimespan = connectivityHistoryTimespan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeConnectivityHistory")
    public Boolean includeConnectivityHistory;
    public GetNetworkBluetoothClientQueryParams withIncludeConnectivityHistory(Boolean includeConnectivityHistory) {
        this.includeConnectivityHistory = includeConnectivityHistory;
        return this;
    }
}