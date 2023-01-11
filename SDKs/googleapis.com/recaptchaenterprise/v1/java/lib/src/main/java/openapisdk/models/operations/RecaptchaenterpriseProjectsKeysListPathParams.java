package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecaptchaenterpriseProjectsKeysListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}