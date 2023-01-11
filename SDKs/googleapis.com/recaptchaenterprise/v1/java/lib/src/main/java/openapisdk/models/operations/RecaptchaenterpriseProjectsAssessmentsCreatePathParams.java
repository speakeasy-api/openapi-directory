package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsAssessmentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecaptchaenterpriseProjectsAssessmentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}