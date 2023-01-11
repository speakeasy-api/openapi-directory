package openapisdk.models.operations;



public class CheckAvailabilityOfFundsResponse {
    public String contentType;
    public CheckAvailabilityOfFundsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400Ais error400AIS;
    public CheckAvailabilityOfFundsResponse withError400Ais(openapisdk.models.shared.Error400Ais error400AIS) {
        this.error400AIS = error400AIS;
        return this;
    }
    public openapisdk.models.shared.Error400NgAis error400NGAIS;
    public CheckAvailabilityOfFundsResponse withError400NgAis(openapisdk.models.shared.Error400NgAis error400NGAIS) {
        this.error400NGAIS = error400NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error401NgPiis error401NGPIIS;
    public CheckAvailabilityOfFundsResponse withError401NgPiis(openapisdk.models.shared.Error401NgPiis error401NGPIIS) {
        this.error401NGPIIS = error401NGPIIS;
        return this;
    }
    public openapisdk.models.shared.Error401Piis error401PIIS;
    public CheckAvailabilityOfFundsResponse withError401Piis(openapisdk.models.shared.Error401Piis error401PIIS) {
        this.error401PIIS = error401PIIS;
        return this;
    }
    public openapisdk.models.shared.Error403NgPiis error403NGPIIS;
    public CheckAvailabilityOfFundsResponse withError403NgPiis(openapisdk.models.shared.Error403NgPiis error403NGPIIS) {
        this.error403NGPIIS = error403NGPIIS;
        return this;
    }
    public openapisdk.models.shared.Error403Piis error403PIIS;
    public CheckAvailabilityOfFundsResponse withError403Piis(openapisdk.models.shared.Error403Piis error403PIIS) {
        this.error403PIIS = error403PIIS;
        return this;
    }
    public openapisdk.models.shared.Error404NgPiis error404NGPIIS;
    public CheckAvailabilityOfFundsResponse withError404NgPiis(openapisdk.models.shared.Error404NgPiis error404NGPIIS) {
        this.error404NGPIIS = error404NGPIIS;
        return this;
    }
    public openapisdk.models.shared.Error404Piis error404PIIS;
    public CheckAvailabilityOfFundsResponse withError404Piis(openapisdk.models.shared.Error404Piis error404PIIS) {
        this.error404PIIS = error404PIIS;
        return this;
    }
    public openapisdk.models.shared.Error405NgPiis error405NGPIIS;
    public CheckAvailabilityOfFundsResponse withError405NgPiis(openapisdk.models.shared.Error405NgPiis error405NGPIIS) {
        this.error405NGPIIS = error405NGPIIS;
        return this;
    }
    public openapisdk.models.shared.Error405Piis error405PIIS;
    public CheckAvailabilityOfFundsResponse withError405Piis(openapisdk.models.shared.Error405Piis error405PIIS) {
        this.error405PIIS = error405PIIS;
        return this;
    }
    public openapisdk.models.shared.Error409NgPiis error409NGPIIS;
    public CheckAvailabilityOfFundsResponse withError409NgPiis(openapisdk.models.shared.Error409NgPiis error409NGPIIS) {
        this.error409NGPIIS = error409NGPIIS;
        return this;
    }
    public openapisdk.models.shared.Error409Piis error409PIIS;
    public CheckAvailabilityOfFundsResponse withError409Piis(openapisdk.models.shared.Error409Piis error409PIIS) {
        this.error409PIIS = error409PIIS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CheckAvailabilityOfFundsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CheckAvailabilityOfFundsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CheckAvailabilityOfFunds200ApplicationJson checkAvailabilityOfFunds200ApplicationJSONObject;
    public CheckAvailabilityOfFundsResponse withCheckAvailabilityOfFunds200ApplicationJsonObject(CheckAvailabilityOfFunds200ApplicationJson checkAvailabilityOfFunds200ApplicationJSONObject) {
        this.checkAvailabilityOfFunds200ApplicationJSONObject = checkAvailabilityOfFunds200ApplicationJSONObject;
        return this;
    }
}