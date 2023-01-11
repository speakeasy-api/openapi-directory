package openapisdk.models.operations;



public class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse {
    public String contentType;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlossaryEntry glossaryEntry;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse withGlossaryEntry(openapisdk.models.shared.GlossaryEntry glossaryEntry) {
        this.glossaryEntry = glossaryEntry;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}