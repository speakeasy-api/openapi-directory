package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}