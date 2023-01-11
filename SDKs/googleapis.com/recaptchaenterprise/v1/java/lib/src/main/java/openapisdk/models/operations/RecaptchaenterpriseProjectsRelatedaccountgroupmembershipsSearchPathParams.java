package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}