package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecaptchaenterpriseProjectsKeysCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}