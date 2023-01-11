package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPostalCodesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=code")
    public String code;
    public DfareportingPostalCodesGetPathParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPostalCodesGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}