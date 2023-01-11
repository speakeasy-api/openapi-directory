package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodAlt1RequestBodyRentPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AUD")
    public Double aud;
    public CreateVodAlt1RequestBodyRentPrice withAud(Double aud) {
        this.aud = aud;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CAD")
    public Double cad;
    public CreateVodAlt1RequestBodyRentPrice withCad(Double cad) {
        this.cad = cad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CHF")
    public Double chf;
    public CreateVodAlt1RequestBodyRentPrice withChf(Double chf) {
        this.chf = chf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DKK")
    public Double dkk;
    public CreateVodAlt1RequestBodyRentPrice withDkk(Double dkk) {
        this.dkk = dkk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EUR")
    public Double eur;
    public CreateVodAlt1RequestBodyRentPrice withEur(Double eur) {
        this.eur = eur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GBP")
    public Double gbp;
    public CreateVodAlt1RequestBodyRentPrice withGbp(Double gbp) {
        this.gbp = gbp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JPY")
    public Double jpy;
    public CreateVodAlt1RequestBodyRentPrice withJpy(Double jpy) {
        this.jpy = jpy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KRW")
    public Double krw;
    public CreateVodAlt1RequestBodyRentPrice withKrw(Double krw) {
        this.krw = krw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NOK")
    public Double nok;
    public CreateVodAlt1RequestBodyRentPrice withNok(Double nok) {
        this.nok = nok;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PLN")
    public Double pln;
    public CreateVodAlt1RequestBodyRentPrice withPln(Double pln) {
        this.pln = pln;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SEK")
    public Double sek;
    public CreateVodAlt1RequestBodyRentPrice withSek(Double sek) {
        this.sek = sek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("USD")
    public Double usd;
    public CreateVodAlt1RequestBodyRentPrice withUsd(Double usd) {
        this.usd = usd;
        return this;
    }
}