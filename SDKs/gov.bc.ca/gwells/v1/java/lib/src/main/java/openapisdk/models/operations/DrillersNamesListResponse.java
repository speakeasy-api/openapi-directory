package openapisdk.models.operations;



public class DrillersNamesListResponse {
    public String contentType;
    public DrillersNamesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonName[] personNames;
    public DrillersNamesListResponse withPersonNames(openapisdk.models.shared.PersonName[] personNames) {
        this.personNames = personNames;
        return this;
    }
    public Long statusCode;
    public DrillersNamesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}