package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecaptchaenterpriseProjectsKeysPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}