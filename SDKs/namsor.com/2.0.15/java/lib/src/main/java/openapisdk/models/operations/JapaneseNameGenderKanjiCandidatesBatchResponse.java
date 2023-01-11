package openapisdk.models.operations;



public class JapaneseNameGenderKanjiCandidatesBatchResponse {
    public openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut;
    public JapaneseNameGenderKanjiCandidatesBatchResponse withBatchNameMatchCandidatesOut(openapisdk.models.shared.BatchNameMatchCandidatesOut batchNameMatchCandidatesOut) {
        this.batchNameMatchCandidatesOut = batchNameMatchCandidatesOut;
        return this;
    }
    public String contentType;
    public JapaneseNameGenderKanjiCandidatesBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JapaneseNameGenderKanjiCandidatesBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}