package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderreportsListDisbursementsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursements")
    public OrderReportDisbursement[] disbursements;
    public OrderreportsListDisbursementsResponse withDisbursements(OrderReportDisbursement[] disbursements) {
        this.disbursements = disbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OrderreportsListDisbursementsResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public OrderreportsListDisbursementsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}