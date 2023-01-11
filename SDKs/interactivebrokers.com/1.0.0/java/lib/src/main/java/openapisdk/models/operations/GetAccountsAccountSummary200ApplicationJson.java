package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountsAccountSummary200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Info")
    public GetAccountsAccountSummary200ApplicationJsonInfo info;
    public GetAccountsAccountSummary200ApplicationJson withInfo(GetAccountsAccountSummary200ApplicationJsonInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ledger")
    public GetAccountsAccountSummary200ApplicationJsonLedger[] ledger;
    public GetAccountsAccountSummary200ApplicationJson withLedger(GetAccountsAccountSummary200ApplicationJsonLedger[] ledger) {
        this.ledger = ledger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public GetAccountsAccountSummary200ApplicationJsonSummary summary;
    public GetAccountsAccountSummary200ApplicationJson withSummary(GetAccountsAccountSummary200ApplicationJsonSummary summary) {
        this.summary = summary;
        return this;
    }
}