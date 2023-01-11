package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.JurisdictionIncludeEnum[] include;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams withInclude(openapisdk.models.shared.JurisdictionIncludeEnum[] include) {
        this.include = include;
        return this;
    }
}