package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DetectImagePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=publishedName")
    public String publishedName;
    public DetectImagePathParams withPublishedName(String publishedName) {
        this.publishedName = publishedName;
        return this;
    }
}