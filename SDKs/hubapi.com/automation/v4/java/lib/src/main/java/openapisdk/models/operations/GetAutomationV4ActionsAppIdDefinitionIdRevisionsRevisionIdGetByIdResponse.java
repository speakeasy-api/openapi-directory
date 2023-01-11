package openapisdk.models.operations;



public class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse {
    public openapisdk.models.shared.ActionRevision actionRevision;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse withActionRevision(openapisdk.models.shared.ActionRevision actionRevision) {
        this.actionRevision = actionRevision;
        return this;
    }
    public byte[] body;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}