package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RepertoirEcreaterequest {
    @JsonProperty("keyid")
    public String keyid;
    public RepertoirEcreaterequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonProperty("repertoireEdit")
    public RepertoirEcreaterequestRepertoireEditEnum repertoireEdit;
    public RepertoirEcreaterequest withRepertoireEdit(RepertoirEcreaterequestRepertoireEditEnum repertoireEdit) {
        this.repertoireEdit = repertoireEdit;
        return this;
    }
    @JsonProperty("repertoireNom")
    public String repertoireNom;
    public RepertoirEcreaterequest withRepertoireNom(String repertoireNom) {
        this.repertoireNom = repertoireNom;
        return this;
    }
}