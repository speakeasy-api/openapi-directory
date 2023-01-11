package openapisdk.models.operations;



public class GetPaymentInformationResponse {
    public byte[] body;
    public GetPaymentInformationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPaymentInformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400NgPis error400NGPIS;
    public GetPaymentInformationResponse withError400NgPis(openapisdk.models.shared.Error400NgPis error400NGPIS) {
        this.error400NGPIS = error400NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error400Pis error400PIS;
    public GetPaymentInformationResponse withError400Pis(openapisdk.models.shared.Error400Pis error400PIS) {
        this.error400PIS = error400PIS;
        return this;
    }
    public openapisdk.models.shared.Error401NgPis error401NGPIS;
    public GetPaymentInformationResponse withError401NgPis(openapisdk.models.shared.Error401NgPis error401NGPIS) {
        this.error401NGPIS = error401NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error401Pis error401PIS;
    public GetPaymentInformationResponse withError401Pis(openapisdk.models.shared.Error401Pis error401PIS) {
        this.error401PIS = error401PIS;
        return this;
    }
    public openapisdk.models.shared.Error403NgPis error403NGPIS;
    public GetPaymentInformationResponse withError403NgPis(openapisdk.models.shared.Error403NgPis error403NGPIS) {
        this.error403NGPIS = error403NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error403Pis error403PIS;
    public GetPaymentInformationResponse withError403Pis(openapisdk.models.shared.Error403Pis error403PIS) {
        this.error403PIS = error403PIS;
        return this;
    }
    public openapisdk.models.shared.Error404NgPis error404NGPIS;
    public GetPaymentInformationResponse withError404NgPis(openapisdk.models.shared.Error404NgPis error404NGPIS) {
        this.error404NGPIS = error404NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error404Pis error404PIS;
    public GetPaymentInformationResponse withError404Pis(openapisdk.models.shared.Error404Pis error404PIS) {
        this.error404PIS = error404PIS;
        return this;
    }
    public openapisdk.models.shared.Error405NgPis error405NGPIS;
    public GetPaymentInformationResponse withError405NgPis(openapisdk.models.shared.Error405NgPis error405NGPIS) {
        this.error405NGPIS = error405NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error405Pis error405PIS;
    public GetPaymentInformationResponse withError405Pis(openapisdk.models.shared.Error405Pis error405PIS) {
        this.error405PIS = error405PIS;
        return this;
    }
    public openapisdk.models.shared.Error409NgPis error409NGPIS;
    public GetPaymentInformationResponse withError409NgPis(openapisdk.models.shared.Error409NgPis error409NGPIS) {
        this.error409NGPIS = error409NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error409Pis error409PIS;
    public GetPaymentInformationResponse withError409Pis(openapisdk.models.shared.Error409Pis error409PIS) {
        this.error409PIS = error409PIS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentInformationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentInformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getPaymentInformation200ApplicationJSONOneOf;
    public GetPaymentInformationResponse withGetPaymentInformation200ApplicationJsonOneOf(Object getPaymentInformation200ApplicationJSONOneOf) {
        this.getPaymentInformation200ApplicationJSONOneOf = getPaymentInformation200ApplicationJSONOneOf;
        return this;
    }
}