package openapisdk.models.operations;



public class ChineseNameCandidatesBatchResponse {
    public openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut;
    public ChineseNameCandidatesBatchResponse withBatchNameMatchCandidatesOut(openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut) {
        this.batchNameMatchCandidatesOut = batchNameMatchCandidatesOut;
        return this;
    }
    public String contentType;
    public ChineseNameCandidatesBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChineseNameCandidatesBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}