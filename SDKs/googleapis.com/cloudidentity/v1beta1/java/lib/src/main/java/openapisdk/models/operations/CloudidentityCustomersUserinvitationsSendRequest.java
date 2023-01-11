package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityCustomersUserinvitationsSendRequest {
    public CloudidentityCustomersUserinvitationsSendPathParams pathParams;
    public CloudidentityCustomersUserinvitationsSendRequest withPathParams(CloudidentityCustomersUserinvitationsSendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityCustomersUserinvitationsSendQueryParams queryParams;
    public CloudidentityCustomersUserinvitationsSendRequest withQueryParams(CloudidentityCustomersUserinvitationsSendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudidentityCustomersUserinvitationsSendRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}