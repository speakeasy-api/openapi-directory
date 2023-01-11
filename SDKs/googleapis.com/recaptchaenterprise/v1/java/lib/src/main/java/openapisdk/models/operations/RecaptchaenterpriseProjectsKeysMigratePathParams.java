package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysMigratePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecaptchaenterpriseProjectsKeysMigratePathParams withName(String name) {
        this.name = name;
        return this;
    }
}