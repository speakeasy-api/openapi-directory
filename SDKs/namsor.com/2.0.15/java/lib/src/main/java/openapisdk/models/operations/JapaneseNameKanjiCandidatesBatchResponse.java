package openapisdk.models.operations;



public class JapaneseNameKanjiCandidatesBatchResponse {
    public openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut;
    public JapaneseNameKanjiCandidatesBatchResponse withBatchNameMatchCandidatesOut(openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut) {
        this.batchNameMatchCandidatesOut = batchNameMatchCandidatesOut;
        return this;
    }
    public String contentType;
    public JapaneseNameKanjiCandidatesBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JapaneseNameKanjiCandidatesBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}