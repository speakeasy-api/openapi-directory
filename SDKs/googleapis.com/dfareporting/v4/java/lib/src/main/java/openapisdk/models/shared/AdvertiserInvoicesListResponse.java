package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserInvoicesListResponse
 * Invoice List Response
**/
public class AdvertiserInvoicesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public Invoice[] invoices;
    public AdvertiserInvoicesListResponse withInvoices(Invoice[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdvertiserInvoicesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public AdvertiserInvoicesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}