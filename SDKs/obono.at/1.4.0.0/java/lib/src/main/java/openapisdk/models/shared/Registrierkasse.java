package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Registrierkasse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Benutzerschluessel")
    public String benutzerschluessel;
    public Registrierkasse withBenutzerschluessel(String benutzerschluessel) {
        this.benutzerschluessel = benutzerschluessel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Kassen-ID")
    public String kassenID;
    public Registrierkasse withKassenId(String kassenID) {
        this.kassenID = kassenID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Signaturerstellungseinheit-UUID")
    public String signaturerstellungseinheitUUID;
    public Registrierkasse withSignaturerstellungseinheitUuid(String signaturerstellungseinheitUUID) {
        this.signaturerstellungseinheitUUID = signaturerstellungseinheitUUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_href")
    public String href;
    public Registrierkasse withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_uuid")
    public String uuid;
    public Registrierkasse withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}