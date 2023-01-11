package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VeloAuthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=grant_type")
    public String grantType;
    public VeloAuthQueryParams withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
}