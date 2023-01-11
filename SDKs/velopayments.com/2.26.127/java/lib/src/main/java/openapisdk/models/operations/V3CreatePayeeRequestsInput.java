package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class V3CreatePayeeRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePayeesRequestInput createPayeesRequest;
    public V3CreatePayeeRequestsInput withCreatePayeesRequest(openapisdk.models.shared.CreatePayeesRequestInput createPayeesRequest) {
        this.createPayeesRequest = createPayeesRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public V3CreatePayeeMultipartFormData object;
    public V3CreatePayeeRequestsInput withObject(V3CreatePayeeMultipartFormData object) {
        this.object = object;
        return this;
    }
}