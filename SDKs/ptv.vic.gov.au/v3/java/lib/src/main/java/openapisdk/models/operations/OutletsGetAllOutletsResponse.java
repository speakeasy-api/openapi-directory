package openapisdk.models.operations;



public class OutletsGetAllOutletsResponse {
    public byte[] body;
    public OutletsGetAllOutletsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public OutletsGetAllOutletsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OutletsGetAllOutletsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public OutletsGetAllOutletsResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3OutletResponse v3OutletResponse;
    public OutletsGetAllOutletsResponse withV3OutletResponse(openapisdk.models.shared.V3OutletResponse v3OutletResponse) {
        this.v3OutletResponse = v3OutletResponse;
        return this;
    }
}