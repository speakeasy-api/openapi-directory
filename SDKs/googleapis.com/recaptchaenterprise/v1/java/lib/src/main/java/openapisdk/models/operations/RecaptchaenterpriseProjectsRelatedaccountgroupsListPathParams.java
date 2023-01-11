package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}