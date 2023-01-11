package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BelegeBelegeGruppe {
    @JsonProperty("Belege-kompakt")
    public String[] belegeKompakt;
    public BelegeBelegeGruppe withBelegeKompakt(String[] belegeKompakt) {
        this.belegeKompakt = belegeKompakt;
        return this;
    }
    @JsonProperty("Signaturzertifikat")
    public String signaturzertifikat;
    public BelegeBelegeGruppe withSignaturzertifikat(String signaturzertifikat) {
        this.signaturzertifikat = signaturzertifikat;
        return this;
    }
    @JsonProperty("Zertifizierungsstellen")
    public String[] zertifizierungsstellen;
    public BelegeBelegeGruppe withZertifizierungsstellen(String[] zertifizierungsstellen) {
        this.zertifizierungsstellen = zertifizierungsstellen;
        return this;
    }
}