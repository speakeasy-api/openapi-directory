package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Rabatt {
    @JsonProperty("Betrag-Brutto")
    public Long betragBrutto;
    public Rabatt withBetragBrutto(Long betragBrutto) {
        this.betragBrutto = betragBrutto;
        return this;
    }
    @JsonProperty("Betrag-Netto")
    public Long betragNetto;
    public Rabatt withBetragNetto(Long betragNetto) {
        this.betragNetto = betragNetto;
        return this;
    }
    @JsonProperty("Bezeichnung")
    public String bezeichnung;
    public Rabatt withBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Satz")
    public RabattSatzEnum satz;
    public Rabatt withSatz(RabattSatzEnum satz) {
        this.satz = satz;
        return this;
    }
}