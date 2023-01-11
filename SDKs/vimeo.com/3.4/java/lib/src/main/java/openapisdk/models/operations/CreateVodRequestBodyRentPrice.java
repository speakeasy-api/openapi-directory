package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodyRentPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AUD")
    public Double aud;
    public CreateVodRequestBodyRentPrice withAud(Double aud) {
        this.aud = aud;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CAD")
    public Double cad;
    public CreateVodRequestBodyRentPrice withCad(Double cad) {
        this.cad = cad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CHF")
    public Double chf;
    public CreateVodRequestBodyRentPrice withChf(Double chf) {
        this.chf = chf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DKK")
    public Double dkk;
    public CreateVodRequestBodyRentPrice withDkk(Double dkk) {
        this.dkk = dkk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EUR")
    public Double eur;
    public CreateVodRequestBodyRentPrice withEur(Double eur) {
        this.eur = eur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GBP")
    public Double gbp;
    public CreateVodRequestBodyRentPrice withGbp(Double gbp) {
        this.gbp = gbp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JPY")
    public Double jpy;
    public CreateVodRequestBodyRentPrice withJpy(Double jpy) {
        this.jpy = jpy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KRW")
    public Double krw;
    public CreateVodRequestBodyRentPrice withKrw(Double krw) {
        this.krw = krw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NOK")
    public Double nok;
    public CreateVodRequestBodyRentPrice withNok(Double nok) {
        this.nok = nok;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PLN")
    public Double pln;
    public CreateVodRequestBodyRentPrice withPln(Double pln) {
        this.pln = pln;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SEK")
    public Double sek;
    public CreateVodRequestBodyRentPrice withSek(Double sek) {
        this.sek = sek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("USD")
    public Double usd;
    public CreateVodRequestBodyRentPrice withUsd(Double usd) {
        this.usd = usd;
        return this;
    }
}