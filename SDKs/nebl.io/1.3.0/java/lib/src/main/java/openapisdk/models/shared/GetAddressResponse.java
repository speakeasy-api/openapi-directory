package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAddressResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addrStr")
    public String addrStr;
    public GetAddressResponse withAddrStr(String addrStr) {
        this.addrStr = addrStr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public GetAddressResponse withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceSat")
    public Double balanceSat;
    public GetAddressResponse withBalanceSat(Double balanceSat) {
        this.balanceSat = balanceSat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReceived")
    public Double totalReceived;
    public GetAddressResponse withTotalReceived(Double totalReceived) {
        this.totalReceived = totalReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReceivedSat")
    public Double totalReceivedSat;
    public GetAddressResponse withTotalReceivedSat(Double totalReceivedSat) {
        this.totalReceivedSat = totalReceivedSat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSent")
    public Double totalSent;
    public GetAddressResponse withTotalSent(Double totalSent) {
        this.totalSent = totalSent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSentSat")
    public Double totalSentSat;
    public GetAddressResponse withTotalSentSat(Double totalSentSat) {
        this.totalSentSat = totalSentSat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public String[] transactions;
    public GetAddressResponse withTransactions(String[] transactions) {
        this.transactions = transactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txAppearances")
    public Double txAppearances;
    public GetAddressResponse withTxAppearances(Double txAppearances) {
        this.txAppearances = txAppearances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unconfirmedBalance")
    public Double unconfirmedBalance;
    public GetAddressResponse withUnconfirmedBalance(Double unconfirmedBalance) {
        this.unconfirmedBalance = unconfirmedBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unconfirmedBalanceSat")
    public Double unconfirmedBalanceSat;
    public GetAddressResponse withUnconfirmedBalanceSat(Double unconfirmedBalanceSat) {
        this.unconfirmedBalanceSat = unconfirmedBalanceSat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unconfirmedTxAppearances")
    public Double unconfirmedTxAppearances;
    public GetAddressResponse withUnconfirmedTxAppearances(Double unconfirmedTxAppearances) {
        this.unconfirmedTxAppearances = unconfirmedTxAppearances;
        return this;
    }
}