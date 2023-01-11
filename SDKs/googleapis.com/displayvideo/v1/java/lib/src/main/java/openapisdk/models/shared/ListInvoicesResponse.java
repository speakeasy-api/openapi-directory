package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInvoicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public Invoice[] invoices;
    public ListInvoicesResponse withInvoices(Invoice[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInvoicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}