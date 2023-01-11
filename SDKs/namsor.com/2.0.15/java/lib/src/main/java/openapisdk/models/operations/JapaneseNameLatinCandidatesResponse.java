package openapisdk.models.operations;



public class JapaneseNameLatinCandidatesResponse {
    public String contentType;
    public JapaneseNameLatinCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut;
    public JapaneseNameLatinCandidatesResponse withNameMatchCandidatesOut(openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut) {
        this.nameMatchCandidatesOut = nameMatchCandidatesOut;
        return this;
    }
    public Long statusCode;
    public JapaneseNameLatinCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}