package openapisdk.models.operations;



public class DrillersListResponse {
    public String contentType;
    public DrillersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonList[] personLists;
    public DrillersListResponse withPersonLists(openapisdk.models.shared.PersonList[] personLists) {
        this.personLists = personLists;
        return this;
    }
    public Long statusCode;
    public DrillersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}