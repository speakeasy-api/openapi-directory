package openapisdk.models.operations;



public class JapaneseNameKanjiCandidates1Response {
    public String contentType;
    public JapaneseNameKanjiCandidates1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut;
    public JapaneseNameKanjiCandidates1Response withNameMatchCandidatesOut(openapisdk.models.shared.NameMatchCandidatesOut nameMatchCandidatesOut) {
        this.nameMatchCandidatesOut = nameMatchCandidatesOut;
        return this;
    }
    public Long statusCode;
    public JapaneseNameKanjiCandidates1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}