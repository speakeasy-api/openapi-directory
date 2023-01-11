package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Zahlung {
    @JsonProperty("Betrag")
    public Long betrag;
    public Zahlung withBetrag(Long betrag) {
        this.betrag = betrag;
        return this;
    }
    @JsonProperty("Bezeichnung")
    public String bezeichnung;
    public Zahlung withBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Referenz")
    public String referenz;
    public Zahlung withReferenz(String referenz) {
        this.referenz = referenz;
        return this;
    }
}