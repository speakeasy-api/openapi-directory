package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column_id")
    public Long columnId;
    public ProjectsCreateCardPathParams withColumnId(Long columnId) {
        this.columnId = columnId;
        return this;
    }
}