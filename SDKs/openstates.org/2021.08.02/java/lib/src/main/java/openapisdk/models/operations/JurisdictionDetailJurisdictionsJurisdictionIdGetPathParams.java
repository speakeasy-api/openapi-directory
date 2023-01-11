package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jurisdiction_id")
    public String jurisdictionId;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams withJurisdictionId(String jurisdictionId) {
        this.jurisdictionId = jurisdictionId;
        return this;
    }
}