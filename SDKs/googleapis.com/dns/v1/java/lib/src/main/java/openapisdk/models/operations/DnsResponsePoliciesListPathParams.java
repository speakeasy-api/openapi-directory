package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsResponsePoliciesListPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}