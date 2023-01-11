package openapisdk.models.operations;



public class GetAutocompleteResponse {
    public openapisdk.models.shared.AutocompleteResults autocompleteResults;
    public GetAutocompleteResponse withAutocompleteResults(openapisdk.models.shared.AutocompleteResults autocompleteResults) {
        this.autocompleteResults = autocompleteResults;
        return this;
    }
    public String contentType;
    public GetAutocompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutocompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}