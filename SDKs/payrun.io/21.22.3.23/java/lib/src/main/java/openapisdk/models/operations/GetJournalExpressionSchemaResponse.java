package openapisdk.models.operations;



public class GetJournalExpressionSchemaResponse {
    public String contentType;
    public GetJournalExpressionSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetJournalExpressionSchemaResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Object journalExpressionDataTable;
    public GetJournalExpressionSchemaResponse withJournalExpressionDataTable(Object journalExpressionDataTable) {
        this.journalExpressionDataTable = journalExpressionDataTable;
        return this;
    }
    public Long statusCode;
    public GetJournalExpressionSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}