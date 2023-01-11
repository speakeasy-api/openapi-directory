package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenesAnnotatedUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetGenesAnnotatedUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetGenesAnnotatedUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}