package openapisdk.models.operations;



public class CreateGooddataResponse {
    public String contentType;
    public CreateGooddataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateGooddataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1Gooddata flexV1Gooddata;
    public CreateGooddataResponse withFlexV1Gooddata(openapisdk.models.shared.FlexV1Gooddata flexV1Gooddata) {
        this.flexV1Gooddata = flexV1Gooddata;
        return this;
    }
}