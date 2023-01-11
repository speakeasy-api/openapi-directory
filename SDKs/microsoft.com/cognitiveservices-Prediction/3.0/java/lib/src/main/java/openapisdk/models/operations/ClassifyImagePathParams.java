package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ClassifyImagePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=publishedName")
    public String publishedName;
    public ClassifyImagePathParams withPublishedName(String publishedName) {
        this.publishedName = publishedName;
        return this;
    }
}