package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_number")
    public String projectNumber;
    public ProjectsReadPathParams withProjectNumber(String projectNumber) {
        this.projectNumber = projectNumber;
        return this;
    }
}