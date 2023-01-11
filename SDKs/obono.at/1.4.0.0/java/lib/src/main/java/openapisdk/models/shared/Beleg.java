package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Beleg {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beleg-Codes")
    public String[] belegCodes;
    public Beleg withBelegCodes(String[] belegCodes) {
        this.belegCodes = belegCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beleg-Typen")
    public BelegBelegTypenEnum[] belegTypen;
    public Beleg withBelegTypen(BelegBelegTypenEnum[] belegTypen) {
        this.belegTypen = belegTypen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Belegdaten")
    public SignierteBelegdaten belegdaten;
    public Beleg withBelegdaten(SignierteBelegdaten belegdaten) {
        this.belegdaten = belegdaten;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JWS")
    public String jws;
    public Beleg withJws(String jws) {
        this.jws = jws;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QR")
    public String qr;
    public Beleg withQr(String qr) {
        this.qr = qr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QR-Link")
    public String qrLink;
    public Beleg withQrLink(String qrLink) {
        this.qrLink = qrLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Registrierkasse-UUID")
    public String registrierkasseUUID;
    public Beleg withRegistrierkasseUuid(String registrierkasseUUID) {
        this.registrierkasseUUID = registrierkasseUUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Signaturerstellungseinheit-UUID")
    public String signaturerstellungseinheitUUID;
    public Beleg withSignaturerstellungseinheitUuid(String signaturerstellungseinheitUUID) {
        this.signaturerstellungseinheitUUID = signaturerstellungseinheitUUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_href")
    public String href;
    public Beleg withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_uuid")
    public String uuid;
    public Beleg withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}