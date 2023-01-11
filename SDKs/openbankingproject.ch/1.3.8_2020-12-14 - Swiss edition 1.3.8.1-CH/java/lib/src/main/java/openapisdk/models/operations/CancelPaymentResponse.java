package openapisdk.models.operations;



public class CancelPaymentResponse {
    public String contentType;
    public CancelPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400NgPis error400NGPIS;
    public CancelPaymentResponse withError400NgPis(openapisdk.models.shared.Error400NgPis error400NGPIS) {
        this.error400NGPIS = error400NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error400Pis error400PIS;
    public CancelPaymentResponse withError400Pis(openapisdk.models.shared.Error400Pis error400PIS) {
        this.error400PIS = error400PIS;
        return this;
    }
    public openapisdk.models.shared.Error401NgPis error401NGPIS;
    public CancelPaymentResponse withError401NgPis(openapisdk.models.shared.Error401NgPis error401NGPIS) {
        this.error401NGPIS = error401NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error401Pis error401PIS;
    public CancelPaymentResponse withError401Pis(openapisdk.models.shared.Error401Pis error401PIS) {
        this.error401PIS = error401PIS;
        return this;
    }
    public openapisdk.models.shared.Error403NgPis error403NGPIS;
    public CancelPaymentResponse withError403NgPis(openapisdk.models.shared.Error403NgPis error403NGPIS) {
        this.error403NGPIS = error403NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error403Pis error403PIS;
    public CancelPaymentResponse withError403Pis(openapisdk.models.shared.Error403Pis error403PIS) {
        this.error403PIS = error403PIS;
        return this;
    }
    public openapisdk.models.shared.Error404NgPis error404NGPIS;
    public CancelPaymentResponse withError404NgPis(openapisdk.models.shared.Error404NgPis error404NGPIS) {
        this.error404NGPIS = error404NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error404Pis error404PIS;
    public CancelPaymentResponse withError404Pis(openapisdk.models.shared.Error404Pis error404PIS) {
        this.error404PIS = error404PIS;
        return this;
    }
    public openapisdk.models.shared.Error405NgPisCanc error405NGPISCANC;
    public CancelPaymentResponse withError405NgPisCanc(openapisdk.models.shared.Error405NgPisCanc error405NGPISCANC) {
        this.error405NGPISCANC = error405NGPISCANC;
        return this;
    }
    public openapisdk.models.shared.Error405PisCanc error405PISCANC;
    public CancelPaymentResponse withError405PisCanc(openapisdk.models.shared.Error405PisCanc error405PISCANC) {
        this.error405PISCANC = error405PISCANC;
        return this;
    }
    public openapisdk.models.shared.Error409NgPis error409NGPIS;
    public CancelPaymentResponse withError409NgPis(openapisdk.models.shared.Error409NgPis error409NGPIS) {
        this.error409NGPIS = error409NGPIS;
        return this;
    }
    public openapisdk.models.shared.Error409Pis error409PIS;
    public CancelPaymentResponse withError409Pis(openapisdk.models.shared.Error409Pis error409PIS) {
        this.error409PIS = error409PIS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CancelPaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CancelPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaymentInitiationCancelResponse202 paymentInitiationCancelResponse202;
    public CancelPaymentResponse withPaymentInitiationCancelResponse202(openapisdk.models.shared.PaymentInitiationCancelResponse202 paymentInitiationCancelResponse202) {
        this.paymentInitiationCancelResponse202 = paymentInitiationCancelResponse202;
        return this;
    }
}