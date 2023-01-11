package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsManagedZonesCreatePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}