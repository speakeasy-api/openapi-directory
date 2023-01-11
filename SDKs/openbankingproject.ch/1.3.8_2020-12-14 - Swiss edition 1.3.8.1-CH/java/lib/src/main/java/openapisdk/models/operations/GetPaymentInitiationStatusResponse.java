package openapisdk.models.operations;



public class GetPaymentInitiationStatusResponse {
    public String contentType;
    public GetPaymentInitiationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400NgPis error400NGPIS;
    public GetPaymentInitiationStatusResponse withError400NgPis(openapisdk.models.shared.Error400NgPis error400NGPIS) {
        this.error400NGPIS = error400NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error400Pis error400PIS;
    public GetPaymentInitiationStatusResponse withError400Pis(openapisdk.models.shared.Error400Pis error400PIS) {
        this.error400PIS = error400PIS;
        return this;
    }
    public openapisdk.models.shared.Error401NgPis error401NGPIS;
    public GetPaymentInitiationStatusResponse withError401NgPis(openapisdk.models.shared.Error401NgPis error401NGPIS) {
        this.error401NGPIS = error401NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error401Pis error401PIS;
    public GetPaymentInitiationStatusResponse withError401Pis(openapisdk.models.shared.Error401Pis error401PIS) {
        this.error401PIS = error401PIS;
        return this;
    }
    public openapisdk.models.shared.Error403NgPis error403NGPIS;
    public GetPaymentInitiationStatusResponse withError403NgPis(openapisdk.models.shared.Error403NgPis error403NGPIS) {
        this.error403NGPIS = error403NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error403Pis error403PIS;
    public GetPaymentInitiationStatusResponse withError403Pis(openapisdk.models.shared.Error403Pis error403PIS) {
        this.error403PIS = error403PIS;
        return this;
    }
    public openapisdk.models.shared.Error404NgPis error404NGPIS;
    public GetPaymentInitiationStatusResponse withError404NgPis(openapisdk.models.shared.Error404NgPis error404NGPIS) {
        this.error404NGPIS = error404NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error404Pis error404PIS;
    public GetPaymentInitiationStatusResponse withError404Pis(openapisdk.models.shared.Error404Pis error404PIS) {
        this.error404PIS = error404PIS;
        return this;
    }
    public openapisdk.models.shared.Error405NgPis error405NGPIS;
    public GetPaymentInitiationStatusResponse withError405NgPis(openapisdk.models.shared.Error405NgPis error405NGPIS) {
        this.error405NGPIS = error405NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error405Pis error405PIS;
    public GetPaymentInitiationStatusResponse withError405Pis(openapisdk.models.shared.Error405Pis error405PIS) {
        this.error405PIS = error405PIS;
        return this;
    }
    public openapisdk.models.shared.Error409NgPis error409NGPIS;
    public GetPaymentInitiationStatusResponse withError409NgPis(openapisdk.models.shared.Error409NgPis error409NGPIS) {
        this.error409NGPIS = error409NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error409Pis error409PIS;
    public GetPaymentInitiationStatusResponse withError409Pis(openapisdk.models.shared.Error409Pis error409PIS) {
        this.error409PIS = error409PIS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentInitiationStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentInitiationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaymentInitiationStatusResponse200Json paymentInitiationStatusResponse200Json;
    public GetPaymentInitiationStatusResponse withPaymentInitiationStatusResponse200Json(openapisdk.models.shared.PaymentInitiationStatusResponse200Json paymentInitiationStatusResponse200Json) {
        this.paymentInitiationStatusResponse200Json = paymentInitiationStatusResponse200Json;
        return this;
    }
    public String paymentInitiationStatusResponse200Xml;
    public GetPaymentInitiationStatusResponse withPaymentInitiationStatusResponse200Xml(String paymentInitiationStatusResponse200Xml) {
        this.paymentInitiationStatusResponse200Xml = paymentInitiationStatusResponse200Xml;
        return this;
    }
}