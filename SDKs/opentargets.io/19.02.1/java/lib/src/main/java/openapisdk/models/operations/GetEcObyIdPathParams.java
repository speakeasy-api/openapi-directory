package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEcObyIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ECO_ID")
    public String ecoID;
    public GetEcObyIdPathParams withEcoId(String ecoID) {
        this.ecoID = ecoID;
        return this;
    }
}