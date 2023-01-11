package openapisdk.models.operations;



public class SearchconsoleUrlInspectionIndexInspectResponse {
    public String contentType;
    public SearchconsoleUrlInspectionIndexInspectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InspectUrlIndexResponse inspectUrlIndexResponse;
    public SearchconsoleUrlInspectionIndexInspectResponse withInspectUrlIndexResponse(openapisdk.models.shared.InspectUrlIndexResponse inspectUrlIndexResponse) {
        this.inspectUrlIndexResponse = inspectUrlIndexResponse;
        return this;
    }
    public Long statusCode;
    public SearchconsoleUrlInspectionIndexInspectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}