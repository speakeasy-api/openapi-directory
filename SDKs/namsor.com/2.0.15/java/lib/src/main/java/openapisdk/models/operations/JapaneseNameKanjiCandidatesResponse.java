package openapisdk.models.operations;



public class JapaneseNameKanjiCandidatesResponse {
    public String contentType;
    public JapaneseNameKanjiCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut;
    public JapaneseNameKanjiCandidatesResponse withNameMatchCandidatesOut(openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut) {
        this.nameMatchCandidatesOut = nameMatchCandidatesOut;
        return this;
    }
    public Long statusCode;
    public JapaneseNameKanjiCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}