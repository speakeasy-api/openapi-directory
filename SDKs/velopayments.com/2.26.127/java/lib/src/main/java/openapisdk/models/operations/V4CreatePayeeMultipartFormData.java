package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class V4CreatePayeeMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=file,json")
    public openapisdk.models.shared.CreatePayeesCsvRequest2[] file;
    public V4CreatePayeeMultipartFormData withFile(openapisdk.models.shared.CreatePayeesCsvRequest2[] file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=payorId")
    public String payorId;
    public V4CreatePayeeMultipartFormData withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}