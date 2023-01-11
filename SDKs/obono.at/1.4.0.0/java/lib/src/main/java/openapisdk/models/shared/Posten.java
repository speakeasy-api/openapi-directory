package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Posten {
    @JsonProperty("Bezeichnung")
    public String bezeichnung;
    public Posten withBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
        return this;
    }
    @JsonProperty("BruttoBetrag")
    public Long bruttoBetrag;
    public Posten withBruttoBetrag(Long bruttoBetrag) {
        this.bruttoBetrag = bruttoBetrag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Externer-Beleg-Belegkreis")
    public String externerBelegBelegkreis;
    public Posten withExternerBelegBelegkreis(String externerBelegBelegkreis) {
        this.externerBelegBelegkreis = externerBelegBelegkreis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Externer-Beleg-Bezeichnung")
    public String externerBelegBezeichnung;
    public Posten withExternerBelegBezeichnung(String externerBelegBezeichnung) {
        this.externerBelegBezeichnung = externerBelegBezeichnung;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Externer-Beleg-Referenz")
    public String externerBelegReferenz;
    public Posten withExternerBelegReferenz(String externerBelegReferenz) {
        this.externerBelegReferenz = externerBelegReferenz;
        return this;
    }
    @JsonProperty("Menge")
    public Long menge;
    public Posten withMenge(Long menge) {
        this.menge = menge;
        return this;
    }
    @JsonProperty("NettoBetrag")
    public Long nettoBetrag;
    public Posten withNettoBetrag(Long nettoBetrag) {
        this.nettoBetrag = nettoBetrag;
        return this;
    }
    @JsonProperty("Satz")
    public PostenSatzEnum satz;
    public Posten withSatz(PostenSatzEnum satz) {
        this.satz = satz;
        return this;
    }
}