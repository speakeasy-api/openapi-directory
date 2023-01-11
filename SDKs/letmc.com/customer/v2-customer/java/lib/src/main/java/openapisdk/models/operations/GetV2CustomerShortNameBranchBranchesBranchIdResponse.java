package openapisdk.models.operations;



public class GetV2CustomerShortNameBranchBranchesBranchIdResponse {
    public byte[] body;
    public GetV2CustomerShortNameBranchBranchesBranchIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.BranchModel branchModel;
    public GetV2CustomerShortNameBranchBranchesBranchIdResponse withBranchModel(openapisdk.models.shared.BranchModel branchModel) {
        this.branchModel = branchModel;
        return this;
    }
    public String contentType;
    public GetV2CustomerShortNameBranchBranchesBranchIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV2CustomerShortNameBranchBranchesBranchIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}