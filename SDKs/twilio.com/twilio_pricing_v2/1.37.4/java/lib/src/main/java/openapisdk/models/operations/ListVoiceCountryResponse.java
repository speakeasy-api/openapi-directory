package openapisdk.models.operations;



public class ListVoiceCountryResponse {
    public String contentType;
    public ListVoiceCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListVoiceCountryListVoiceCountryResponse listVoiceCountryResponse;
    public ListVoiceCountryResponse withListVoiceCountryResponse(ListVoiceCountryListVoiceCountryResponse listVoiceCountryResponse) {
        this.listVoiceCountryResponse = listVoiceCountryResponse;
        return this;
    }
    public Long statusCode;
    public ListVoiceCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}