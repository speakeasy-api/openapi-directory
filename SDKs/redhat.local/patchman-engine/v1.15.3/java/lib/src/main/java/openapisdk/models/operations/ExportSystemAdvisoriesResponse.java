package openapisdk.models.operations;



public class ExportSystemAdvisoriesResponse {
    public byte[] body;
    public ExportSystemAdvisoriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportSystemAdvisoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportSystemAdvisoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemAdvisoriesDbLookup[] controllersSystemAdvisoriesDBLookups;
    public ExportSystemAdvisoriesResponse withControllersSystemAdvisoriesDbLookups(openapisdk.models.shared.ControllersSystemAdvisoriesDbLookup[] controllersSystemAdvisoriesDBLookups) {
        this.controllersSystemAdvisoriesDBLookups = controllersSystemAdvisoriesDBLookups;
        return this;
    }
}