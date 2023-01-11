package openapisdk.models.operations;



public class JapaneseNameLatinCandidatesBatchResponse {
    public openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut;
    public JapaneseNameLatinCandidatesBatchResponse withBatchNameMatchCandidatesOut(openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut) {
        this.batchNameMatchCandidatesOut = batchNameMatchCandidatesOut;
        return this;
    }
    public String contentType;
    public JapaneseNameLatinCandidatesBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JapaneseNameLatinCandidatesBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}