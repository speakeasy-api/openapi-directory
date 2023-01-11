package openapisdk.models.operations;



public class DoubleclicksearchSavedColumnsListResponse {
    public String contentType;
    public DoubleclicksearchSavedColumnsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SavedColumnList savedColumnList;
    public DoubleclicksearchSavedColumnsListResponse withSavedColumnList(openapisdk.models.shared.SavedColumnList savedColumnList) {
        this.savedColumnList = savedColumnList;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchSavedColumnsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}