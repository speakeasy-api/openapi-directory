package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class V3CreatePayeeMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=file,json")
    public openapisdk.models.shared.CreatePayeesCsvRequest[] file;
    public V3CreatePayeeMultipartFormData withFile(openapisdk.models.shared.CreatePayeesCsvRequest[] file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=payorId")
    public String payorId;
    public V3CreatePayeeMultipartFormData withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}