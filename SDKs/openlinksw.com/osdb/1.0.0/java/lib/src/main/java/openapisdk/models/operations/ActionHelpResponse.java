package openapisdk.models.operations;



public class ActionHelpResponse {
    public openapisdk.models.shared.ActionHelpResponse actionHelpResponse;
    public ActionHelpResponse withActionHelpResponse(openapisdk.models.shared.ActionHelpResponse actionHelpResponse) {
        this.actionHelpResponse = actionHelpResponse;
        return this;
    }
    public String contentType;
    public ActionHelpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public ActionHelpResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public ActionHelpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}