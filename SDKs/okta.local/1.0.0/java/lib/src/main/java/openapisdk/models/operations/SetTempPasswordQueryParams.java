package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTempPasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tempPassword")
    public String tempPassword;
    public SetTempPasswordQueryParams withTempPassword(String tempPassword) {
        this.tempPassword = tempPassword;
        return this;
    }
}