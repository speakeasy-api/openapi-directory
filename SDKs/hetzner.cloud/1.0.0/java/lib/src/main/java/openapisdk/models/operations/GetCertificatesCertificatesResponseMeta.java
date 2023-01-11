package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesCertificatesResponseMeta {
    @JsonProperty("pagination")
    public GetCertificatesCertificatesResponseMetaPagination pagination;
    public GetCertificatesCertificatesResponseMeta withPagination(GetCertificatesCertificatesResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}