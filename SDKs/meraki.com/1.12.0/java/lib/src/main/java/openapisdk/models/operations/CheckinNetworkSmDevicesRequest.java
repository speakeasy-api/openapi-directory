package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckinNetworkSmDevicesRequest {
    public CheckinNetworkSmDevicesPathParams pathParams;
    public CheckinNetworkSmDevicesRequest withPathParams(CheckinNetworkSmDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CheckinNetworkSmDevicesRequestBody request;
    public CheckinNetworkSmDevicesRequest withRequest(CheckinNetworkSmDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}