package openapisdk.models.operations;



public class ChineseNameCandidatesResponse {
    public String contentType;
    public ChineseNameCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut;
    public ChineseNameCandidatesResponse withNameMatchCandidatesOut(openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut) {
        this.nameMatchCandidatesOut = nameMatchCandidatesOut;
        return this;
    }
    public Long statusCode;
    public ChineseNameCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}