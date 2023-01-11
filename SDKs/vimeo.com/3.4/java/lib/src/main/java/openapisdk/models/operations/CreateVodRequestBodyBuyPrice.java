package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodyBuyPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AUD")
    public Double aud;
    public CreateVodRequestBodyBuyPrice withAud(Double aud) {
        this.aud = aud;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CAD")
    public Double cad;
    public CreateVodRequestBodyBuyPrice withCad(Double cad) {
        this.cad = cad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CHF")
    public Double chf;
    public CreateVodRequestBodyBuyPrice withChf(Double chf) {
        this.chf = chf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DKK")
    public Double dkk;
    public CreateVodRequestBodyBuyPrice withDkk(Double dkk) {
        this.dkk = dkk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EUR")
    public Double eur;
    public CreateVodRequestBodyBuyPrice withEur(Double eur) {
        this.eur = eur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GBP")
    public Double gbp;
    public CreateVodRequestBodyBuyPrice withGbp(Double gbp) {
        this.gbp = gbp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JPY")
    public Double jpy;
    public CreateVodRequestBodyBuyPrice withJpy(Double jpy) {
        this.jpy = jpy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KRW")
    public Double krw;
    public CreateVodRequestBodyBuyPrice withKrw(Double krw) {
        this.krw = krw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NOK")
    public Double nok;
    public CreateVodRequestBodyBuyPrice withNok(Double nok) {
        this.nok = nok;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PLN")
    public Double pln;
    public CreateVodRequestBodyBuyPrice withPln(Double pln) {
        this.pln = pln;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SEK")
    public Double sek;
    public CreateVodRequestBodyBuyPrice withSek(Double sek) {
        this.sek = sek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("USD")
    public Double usd;
    public CreateVodRequestBodyBuyPrice withUsd(Double usd) {
        this.usd = usd;
        return this;
    }
}