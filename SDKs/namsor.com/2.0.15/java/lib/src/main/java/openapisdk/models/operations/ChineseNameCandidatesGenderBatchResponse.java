package openapisdk.models.operations;



public class ChineseNameCandidatesGenderBatchResponse {
    public openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut;
    public ChineseNameCandidatesGenderBatchResponse withBatchNameMatchCandidatesOut(openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut) {
        this.batchNameMatchCandidatesOut = batchNameMatchCandidatesOut;
        return this;
    }
    public String contentType;
    public ChineseNameCandidatesGenderBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChineseNameCandidatesGenderBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}