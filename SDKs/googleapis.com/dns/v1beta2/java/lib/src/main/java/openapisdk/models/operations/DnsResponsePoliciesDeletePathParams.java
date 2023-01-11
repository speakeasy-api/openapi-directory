package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsResponsePoliciesDeletePathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=responsePolicy")
    public String responsePolicy;
    public DnsResponsePoliciesDeletePathParams withResponsePolicy(String responsePolicy) {
        this.responsePolicy = responsePolicy;
        return this;
    }
}