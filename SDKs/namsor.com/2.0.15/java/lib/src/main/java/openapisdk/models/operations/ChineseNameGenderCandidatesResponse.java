package openapisdk.models.operations;



public class ChineseNameGenderCandidatesResponse {
    public String contentType;
    public ChineseNameGenderCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut;
    public ChineseNameGenderCandidatesResponse withNameMatchCandidatesOut(openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut) {
        this.nameMatchCandidatesOut = nameMatchCandidatesOut;
        return this;
    }
    public Long statusCode;
    public ChineseNameGenderCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}