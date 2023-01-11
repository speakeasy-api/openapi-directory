package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCampagneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_deb")
    public String dateDeb;
    public GetCampagneQueryParams withDateDeb(String dateDeb) {
        this.dateDeb = dateDeb;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_fin")
    public String dateFin;
    public GetCampagneQueryParams withDateFin(String dateFin) {
        this.dateFin = dateFin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyid")
    public String keyid;
    public GetCampagneQueryParams withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rapportCampagne")
    public GetCampagneRapportCampagneEnum rapportCampagne;
    public GetCampagneQueryParams withRapportCampagne(GetCampagneRapportCampagneEnum rapportCampagne) {
        this.rapportCampagne = rapportCampagne;
        return this;
    }
}