package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderFullPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fullName")
    public String fullName;
    public GenderFullPathParams withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}