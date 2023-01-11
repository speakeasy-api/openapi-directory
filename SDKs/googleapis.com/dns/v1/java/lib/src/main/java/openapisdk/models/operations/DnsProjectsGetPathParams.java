package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsProjectsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsProjectsGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}