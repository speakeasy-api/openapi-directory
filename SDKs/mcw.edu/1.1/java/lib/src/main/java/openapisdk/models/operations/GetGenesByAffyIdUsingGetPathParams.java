package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenesByAffyIdUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=affyId")
    public String affyId;
    public GetGenesByAffyIdUsingGetPathParams withAffyId(String affyId) {
        this.affyId = affyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetGenesByAffyIdUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}