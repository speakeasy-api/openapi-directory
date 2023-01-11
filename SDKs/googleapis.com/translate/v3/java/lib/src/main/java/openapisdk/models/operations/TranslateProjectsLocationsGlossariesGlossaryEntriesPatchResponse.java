package openapisdk.models.operations;



public class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse {
    public String contentType;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlossaryEntry glossaryEntry;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse withGlossaryEntry(openapisdk.models.shared.GlossaryEntry glossaryEntry) {
        this.glossaryEntry = glossaryEntry;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}