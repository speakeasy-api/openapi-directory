/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetCampagneRequest {
    /**
     * date de debut au format YYYY-MM-DD hh:mm
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_deb")
    public String dateDeb;

    public GetCampagneRequest withDateDeb(String dateDeb) {
        this.dateDeb = dateDeb;
        return this;
    }
    
    /**
     * date de fin au format YYYY-MM-DD hh:mm
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_fin")
    public String dateFin;

    public GetCampagneRequest withDateFin(String dateFin) {
        this.dateFin = dateFin;
        return this;
    }
    
    /**
     * Cl\u00e9 API
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyid")
    public String keyid;

    public GetCampagneRequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    
    /**
     * Doit valoir "1"
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rapportCampagne")
    public GetCampagneRapportCampagneEnum rapportCampagne;

    public GetCampagneRequest withRapportCampagne(GetCampagneRapportCampagneEnum rapportCampagne) {
        this.rapportCampagne = rapportCampagne;
        return this;
    }
    
    public GetCampagneRequest(@JsonProperty("date_deb") String dateDeb, @JsonProperty("date_fin") String dateFin, @JsonProperty("keyid") String keyid, @JsonProperty("rapportCampagne") GetCampagneRapportCampagneEnum rapportCampagne) {
        this.dateDeb = dateDeb;
        this.dateFin = dateFin;
        this.keyid = keyid;
        this.rapportCampagne = rapportCampagne;
  }
}
