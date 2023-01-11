package openapisdk.models.operations;



public class GetJournalReportOuputResponse {
    public String contentType;
    public GetJournalReportOuputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetJournalReportOuputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getJournalReportOuput200ApplicationJSONBinaryString;
    public GetJournalReportOuputResponse withGetJournalReportOuput200ApplicationJsonBinaryString(byte[] getJournalReportOuput200ApplicationJSONBinaryString) {
        this.getJournalReportOuput200ApplicationJSONBinaryString = getJournalReportOuput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetJournalReportOuputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}