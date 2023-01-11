package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityCustomersUserinvitationsCancelRequest {
    public CloudidentityCustomersUserinvitationsCancelPathParams pathParams;
    public CloudidentityCustomersUserinvitationsCancelRequest withPathParams(CloudidentityCustomersUserinvitationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityCustomersUserinvitationsCancelQueryParams queryParams;
    public CloudidentityCustomersUserinvitationsCancelRequest withQueryParams(CloudidentityCustomersUserinvitationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudidentityCustomersUserinvitationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}