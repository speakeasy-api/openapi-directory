package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Belege {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Belege")
    public Beleg[] belege;
    public Belege withBelege(Beleg[] belege) {
        this.belege = belege;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Belege-Gruppe")
    public BelegeBelegeGruppe[] belegeGruppe;
    public Belege withBelegeGruppe(BelegeBelegeGruppe[] belegeGruppe) {
        this.belegeGruppe = belegeGruppe;
        return this;
    }
}