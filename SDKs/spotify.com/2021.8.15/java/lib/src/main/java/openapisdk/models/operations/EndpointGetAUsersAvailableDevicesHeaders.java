package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAUsersAvailableDevicesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAUsersAvailableDevicesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}