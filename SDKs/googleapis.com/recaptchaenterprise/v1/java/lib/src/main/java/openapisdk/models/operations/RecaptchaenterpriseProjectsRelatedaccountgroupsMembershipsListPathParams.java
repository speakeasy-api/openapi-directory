package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}