package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptEuaRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnduserAcceptanceDetails enduserAcceptanceDetails;
    public AcceptEuaRequests withEnduserAcceptanceDetails(openapisdk.models.shared.EnduserAcceptanceDetails enduserAcceptanceDetails) {
        this.enduserAcceptanceDetails = enduserAcceptanceDetails;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.EnduserAcceptanceDetails enduserAcceptanceDetails1;
    public AcceptEuaRequests withEnduserAcceptanceDetails1(openapisdk.models.shared.EnduserAcceptanceDetails enduserAcceptanceDetails1) {
        this.enduserAcceptanceDetails1 = enduserAcceptanceDetails1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.EnduserAcceptanceDetails enduserAcceptanceDetails2;
    public AcceptEuaRequests withEnduserAcceptanceDetails2(openapisdk.models.shared.EnduserAcceptanceDetails enduserAcceptanceDetails2) {
        this.enduserAcceptanceDetails2 = enduserAcceptanceDetails2;
        return this;
    }
}