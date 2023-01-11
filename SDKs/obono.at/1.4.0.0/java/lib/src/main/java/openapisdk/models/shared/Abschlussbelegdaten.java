package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Abschlussbelegdaten {
    @JsonProperty("Abschluss-Beginn-Datum-Uhrzeit")
    public String abschlussBeginnDatumUhrzeit;
    public Abschlussbelegdaten withAbschlussBeginnDatumUhrzeit(String abschlussBeginnDatumUhrzeit) {
        this.abschlussBeginnDatumUhrzeit = abschlussBeginnDatumUhrzeit;
        return this;
    }
    @JsonProperty("Abschluss-Ende-Datum-Uhrzeit")
    public String abschlussEndeDatumUhrzeit;
    public Abschlussbelegdaten withAbschlussEndeDatumUhrzeit(String abschlussEndeDatumUhrzeit) {
        this.abschlussEndeDatumUhrzeit = abschlussEndeDatumUhrzeit;
        return this;
    }
}