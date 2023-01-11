package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorContactsInsertRequest {
    public MirrorContactsInsertQueryParams queryParams;
    public MirrorContactsInsertRequest withQueryParams(MirrorContactsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Contact request;
    public MirrorContactsInsertRequest withRequest(openapisdk.models.shared.Contact request) {
        this.request = request;
        return this;
    }
    public MirrorContactsInsertSecurity security;
    public MirrorContactsInsertRequest withSecurity(MirrorContactsInsertSecurity security) {
        this.security = security;
        return this;
    }
}