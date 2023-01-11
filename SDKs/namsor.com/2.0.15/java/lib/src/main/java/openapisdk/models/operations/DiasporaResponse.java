package openapisdk.models.operations;



public class DiasporaResponse {
    public String contentType;
    public DiasporaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNameDiasporaedOut firstLastNameDiasporaedOut;
    public DiasporaResponse withFirstLastNameDiasporaedOut(openapisdk.models.shared.FirstLastNameDiasporaedOut firstLastNameDiasporaedOut) {
        this.firstLastNameDiasporaedOut = firstLastNameDiasporaedOut;
        return this;
    }
    public Long statusCode;
    public DiasporaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}