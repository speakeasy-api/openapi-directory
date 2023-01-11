package openapisdk.models.operations;



public class GetTransactionListResponse {
    public byte[] body;
    public GetTransactionListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTransactionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400Ais error400AIS;
    public GetTransactionListResponse withError400Ais(openapisdk.models.shared.Error400Ais error400AIS) {
        this.error400AIS = error400AIS;
        return this;
    }
    public openapisdk.models.shared.Error400NgAis error400NGAIS;
    public GetTransactionListResponse withError400NgAis(openapisdk.models.shared.Error400NgAis error400NGAIS) {
        this.error400NGAIS = error400NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error401Ais error401AIS;
    public GetTransactionListResponse withError401Ais(openapisdk.models.shared.Error401Ais error401AIS) {
        this.error401AIS = error401AIS;
        return this;
    }
    public openapisdk.models.shared.Error401NgAis error401NGAIS;
    public GetTransactionListResponse withError401NgAis(openapisdk.models.shared.Error401NgAis error401NGAIS) {
        this.error401NGAIS = error401NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error403Ais error403AIS;
    public GetTransactionListResponse withError403Ais(openapisdk.models.shared.Error403Ais error403AIS) {
        this.error403AIS = error403AIS;
        return this;
    }
    public openapisdk.models.shared.Error403NgAis error403NGAIS;
    public GetTransactionListResponse withError403NgAis(openapisdk.models.shared.Error403NgAis error403NGAIS) {
        this.error403NGAIS = error403NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error404Ais error404AIS;
    public GetTransactionListResponse withError404Ais(openapisdk.models.shared.Error404Ais error404AIS) {
        this.error404AIS = error404AIS;
        return this;
    }
    public openapisdk.models.shared.Error404NgAis error404NGAIS;
    public GetTransactionListResponse withError404NgAis(openapisdk.models.shared.Error404NgAis error404NGAIS) {
        this.error404NGAIS = error404NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error405Ais error405AIS;
    public GetTransactionListResponse withError405Ais(openapisdk.models.shared.Error405Ais error405AIS) {
        this.error405AIS = error405AIS;
        return this;
    }
    public openapisdk.models.shared.Error405NgAis error405NGAIS;
    public GetTransactionListResponse withError405NgAis(openapisdk.models.shared.Error405NgAis error405NGAIS) {
        this.error405NGAIS = error405NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error406Ais error406AIS;
    public GetTransactionListResponse withError406Ais(openapisdk.models.shared.Error406Ais error406AIS) {
        this.error406AIS = error406AIS;
        return this;
    }
    public openapisdk.models.shared.Error406NgAis error406NGAIS;
    public GetTransactionListResponse withError406NgAis(openapisdk.models.shared.Error406NgAis error406NGAIS) {
        this.error406NGAIS = error406NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error409Ais error409AIS;
    public GetTransactionListResponse withError409Ais(openapisdk.models.shared.Error409Ais error409AIS) {
        this.error409AIS = error409AIS;
        return this;
    }
    public openapisdk.models.shared.Error409NgAis error409NGAIS;
    public GetTransactionListResponse withError409NgAis(openapisdk.models.shared.Error409NgAis error409NGAIS) {
        this.error409NGAIS = error409NGAIS;
        return this;
    }
    public openapisdk.models.shared.Error429Ais error429AIS;
    public GetTransactionListResponse withError429Ais(openapisdk.models.shared.Error429Ais error429AIS) {
        this.error429AIS = error429AIS;
        return this;
    }
    public openapisdk.models.shared.Error429NgAis error429NGAIS;
    public GetTransactionListResponse withError429NgAis(openapisdk.models.shared.Error429NgAis error429NGAIS) {
        this.error429NGAIS = error429NGAIS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTransactionListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTransactionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getTransactionList200TextPlainOneOf;
    public GetTransactionListResponse withGetTransactionList200TextPlainOneOf(String getTransactionList200TextPlainOneOf) {
        this.getTransactionList200TextPlainOneOf = getTransactionList200TextPlainOneOf;
        return this;
    }
    public openapisdk.models.shared.TransactionsResponse200Json transactionsResponse200Json;
    public GetTransactionListResponse withTransactionsResponse200Json(openapisdk.models.shared.TransactionsResponse200Json transactionsResponse200Json) {
        this.transactionsResponse200Json = transactionsResponse200Json;
        return this;
    }
}