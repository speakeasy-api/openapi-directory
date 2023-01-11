package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Monatsbeleg {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beleg-UUID")
    public String belegUUID;
    public Monatsbeleg withBelegUuid(String belegUUID) {
        this.belegUUID = belegUUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FON-Geprueft-Datum-Uhrzeit")
    public String fonGeprueftDatumUhrzeit;
    public Monatsbeleg withFonGeprueftDatumUhrzeit(String fonGeprueftDatumUhrzeit) {
        this.fonGeprueftDatumUhrzeit = fonGeprueftDatumUhrzeit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FON-Geprueft-Erfolgreich")
    public Boolean fonGeprueftErfolgreich;
    public Monatsbeleg withFonGeprueftErfolgreich(Boolean fonGeprueftErfolgreich) {
        this.fonGeprueftErfolgreich = fonGeprueftErfolgreich;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jahr")
    public Long jahr;
    public Monatsbeleg withJahr(Long jahr) {
        this.jahr = jahr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Monat")
    public Long monat;
    public Monatsbeleg withMonat(Long monat) {
        this.monat = monat;
        return this;
    }
}