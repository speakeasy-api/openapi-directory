package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class V4CreatePayeeRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePayeesRequest2Input createPayeesRequest2;
    public V4CreatePayeeRequestsInput withCreatePayeesRequest2(openapisdk.models.shared.CreatePayeesRequest2Input createPayeesRequest2) {
        this.createPayeesRequest2 = createPayeesRequest2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public V4CreatePayeeMultipartFormData object;
    public V4CreatePayeeRequestsInput withObject(V4CreatePayeeMultipartFormData object) {
        this.object = object;
        return this;
    }
}