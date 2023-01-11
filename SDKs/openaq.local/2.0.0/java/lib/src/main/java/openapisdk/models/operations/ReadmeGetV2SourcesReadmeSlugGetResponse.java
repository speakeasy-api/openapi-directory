package openapisdk.models.operations;



public class ReadmeGetV2SourcesReadmeSlugGetResponse {
    public String contentType;
    public ReadmeGetV2SourcesReadmeSlugGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ReadmeGetV2SourcesReadmeSlugGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public ReadmeGetV2SourcesReadmeSlugGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object readmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny;
    public ReadmeGetV2SourcesReadmeSlugGetResponse withReadmeGetV2SourcesReadmeSlugGet200ApplicationJsonAny(Object readmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny) {
        this.readmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny = readmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny;
        return this;
    }
}