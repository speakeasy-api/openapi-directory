package openapisdk.models.operations;



public class DiasporaBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameDiasporaedOut batchFirstLastNameDiasporaedOut;
    public DiasporaBatchResponse withBatchFirstLastNameDiasporaedOut(openapisdk.models.shared.BatchFirstLastNameDiasporaedOut batchFirstLastNameDiasporaedOut) {
        this.batchFirstLastNameDiasporaedOut = batchFirstLastNameDiasporaedOut;
        return this;
    }
    public String contentType;
    public DiasporaBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DiasporaBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}