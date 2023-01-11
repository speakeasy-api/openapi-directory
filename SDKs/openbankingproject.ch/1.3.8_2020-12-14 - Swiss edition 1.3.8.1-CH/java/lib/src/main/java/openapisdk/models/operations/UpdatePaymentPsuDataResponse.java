package openapisdk.models.operations;



public class UpdatePaymentPsuDataResponse {
    public String contentType;
    public UpdatePaymentPsuDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400NgPis error400NGPIS;
    public UpdatePaymentPsuDataResponse withError400NgPis(openapisdk.models.shared.Error400NgPis error400NGPIS) {
        this.error400NGPIS = error400NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error400Pis error400PIS;
    public UpdatePaymentPsuDataResponse withError400Pis(openapisdk.models.shared.Error400Pis error400PIS) {
        this.error400PIS = error400PIS;
        return this;
    }
    public openapisdk.models.shared.Error401NgPis error401NGPIS;
    public UpdatePaymentPsuDataResponse withError401NgPis(openapisdk.models.shared.Error401NgPis error401NGPIS) {
        this.error401NGPIS = error401NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error401Pis error401PIS;
    public UpdatePaymentPsuDataResponse withError401Pis(openapisdk.models.shared.Error401Pis error401PIS) {
        this.error401PIS = error401PIS;
        return this;
    }
    public openapisdk.models.shared.Error403NgPis error403NGPIS;
    public UpdatePaymentPsuDataResponse withError403NgPis(openapisdk.models.shared.Error403NgPis error403NGPIS) {
        this.error403NGPIS = error403NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error403Pis error403PIS;
    public UpdatePaymentPsuDataResponse withError403Pis(openapisdk.models.shared.Error403Pis error403PIS) {
        this.error403PIS = error403PIS;
        return this;
    }
    public openapisdk.models.shared.Error404NgPis error404NGPIS;
    public UpdatePaymentPsuDataResponse withError404NgPis(openapisdk.models.shared.Error404NgPis error404NGPIS) {
        this.error404NGPIS = error404NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error404Pis error404PIS;
    public UpdatePaymentPsuDataResponse withError404Pis(openapisdk.models.shared.Error404Pis error404PIS) {
        this.error404PIS = error404PIS;
        return this;
    }
    public openapisdk.models.shared.Error405NgPis error405NGPIS;
    public UpdatePaymentPsuDataResponse withError405NgPis(openapisdk.models.shared.Error405NgPis error405NGPIS) {
        this.error405NGPIS = error405NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error405Pis error405PIS;
    public UpdatePaymentPsuDataResponse withError405Pis(openapisdk.models.shared.Error405Pis error405PIS) {
        this.error405PIS = error405PIS;
        return this;
    }
    public openapisdk.models.shared.Error409NgPis error409NGPIS;
    public UpdatePaymentPsuDataResponse withError409NgPis(openapisdk.models.shared.Error409NgPis error409NGPIS) {
        this.error409NGPIS = error409NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error409Pis error409PIS;
    public UpdatePaymentPsuDataResponse withError409Pis(openapisdk.models.shared.Error409Pis error409PIS) {
        this.error409PIS = error409PIS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdatePaymentPsuDataResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdatePaymentPsuDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updatePaymentPsuData200ApplicationJSONOneOf;
    public UpdatePaymentPsuDataResponse withUpdatePaymentPsuData200ApplicationJsonOneOf(Object updatePaymentPsuData200ApplicationJSONOneOf) {
        this.updatePaymentPsuData200ApplicationJSONOneOf = updatePaymentPsuData200ApplicationJSONOneOf;
        return this;
    }
}