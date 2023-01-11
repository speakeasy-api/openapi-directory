package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesIsUpgradeablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=notebookInstance")
    public String notebookInstance;
    public NotebooksProjectsLocationsInstancesIsUpgradeablePathParams withNotebookInstance(String notebookInstance) {
        this.notebookInstance = notebookInstance;
        return this;
    }
}