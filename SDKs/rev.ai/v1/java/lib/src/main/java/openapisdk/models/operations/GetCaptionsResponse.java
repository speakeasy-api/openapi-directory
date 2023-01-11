package openapisdk.models.operations;



public class GetCaptionsResponse {
    public byte[] body;
    public GetCaptionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCaptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getCaptions401ApplicationProblemPlusJsonAny;
    public GetCaptionsResponse withGetCaptions401ApplicationProblemPlusJsonAny(Object getCaptions401ApplicationProblemPlusJsonAny) {
        this.getCaptions401ApplicationProblemPlusJsonAny = getCaptions401ApplicationProblemPlusJsonAny;
        return this;
    }
    public GetCaptions404ApplicationProblemPlusJson getCaptions404ApplicationProblemPlusJsonObject;
    public GetCaptionsResponse withGetCaptions404ApplicationProblemPlusJsonObject(GetCaptions404ApplicationProblemPlusJson getCaptions404ApplicationProblemPlusJsonObject) {
        this.getCaptions404ApplicationProblemPlusJsonObject = getCaptions404ApplicationProblemPlusJsonObject;
        return this;
    }
    public GetCaptions405ApplicationProblemPlusJson getCaptions405ApplicationProblemPlusJsonObject;
    public GetCaptionsResponse withGetCaptions405ApplicationProblemPlusJsonObject(GetCaptions405ApplicationProblemPlusJson getCaptions405ApplicationProblemPlusJsonObject) {
        this.getCaptions405ApplicationProblemPlusJsonObject = getCaptions405ApplicationProblemPlusJsonObject;
        return this;
    }
    public GetCaptions406ApplicationProblemPlusJson getCaptions406ApplicationProblemPlusJsonObject;
    public GetCaptionsResponse withGetCaptions406ApplicationProblemPlusJsonObject(GetCaptions406ApplicationProblemPlusJson getCaptions406ApplicationProblemPlusJsonObject) {
        this.getCaptions406ApplicationProblemPlusJsonObject = getCaptions406ApplicationProblemPlusJsonObject;
        return this;
    }
    public GetCaptions409ApplicationProblemPlusJson getCaptions409ApplicationProblemPlusJsonObject;
    public GetCaptionsResponse withGetCaptions409ApplicationProblemPlusJsonObject(GetCaptions409ApplicationProblemPlusJson getCaptions409ApplicationProblemPlusJsonObject) {
        this.getCaptions409ApplicationProblemPlusJsonObject = getCaptions409ApplicationProblemPlusJsonObject;
        return this;
    }
    public Long statusCode;
    public GetCaptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}