package openapisdk.models.operations;



public class GetTranscriptByIdResponse {
    public String contentType;
    public GetTranscriptByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getTranscriptById401ApplicationProblemPlusJsonAny;
    public GetTranscriptByIdResponse withGetTranscriptById401ApplicationProblemPlusJsonAny(Object getTranscriptById401ApplicationProblemPlusJsonAny) {
        this.getTranscriptById401ApplicationProblemPlusJsonAny = getTranscriptById401ApplicationProblemPlusJsonAny;
        return this;
    }
    public GetTranscriptById404ApplicationProblemPlusJson getTranscriptById404ApplicationProblemPlusJsonObject;
    public GetTranscriptByIdResponse withGetTranscriptById404ApplicationProblemPlusJsonObject(GetTranscriptById404ApplicationProblemPlusJson getTranscriptById404ApplicationProblemPlusJsonObject) {
        this.getTranscriptById404ApplicationProblemPlusJsonObject = getTranscriptById404ApplicationProblemPlusJsonObject;
        return this;
    }
    public GetTranscriptById406ApplicationProblemPlusJson getTranscriptById406ApplicationProblemPlusJsonObject;
    public GetTranscriptByIdResponse withGetTranscriptById406ApplicationProblemPlusJsonObject(GetTranscriptById406ApplicationProblemPlusJson getTranscriptById406ApplicationProblemPlusJsonObject) {
        this.getTranscriptById406ApplicationProblemPlusJsonObject = getTranscriptById406ApplicationProblemPlusJsonObject;
        return this;
    }
    public GetTranscriptById409ApplicationProblemPlusJson getTranscriptById409ApplicationProblemPlusJsonObject;
    public GetTranscriptByIdResponse withGetTranscriptById409ApplicationProblemPlusJsonObject(GetTranscriptById409ApplicationProblemPlusJson getTranscriptById409ApplicationProblemPlusJsonObject) {
        this.getTranscriptById409ApplicationProblemPlusJsonObject = getTranscriptById409ApplicationProblemPlusJsonObject;
        return this;
    }
    public Long statusCode;
    public GetTranscriptByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Transcript transcript;
    public GetTranscriptByIdResponse withTranscript(openapisdk.models.shared.Transcript transcript) {
        this.transcript = transcript;
        return this;
    }
    public String transcriptText;
    public GetTranscriptByIdResponse withTranscriptText(String transcriptText) {
        this.transcriptText = transcriptText;
        return this;
    }
}