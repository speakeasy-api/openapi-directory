package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageWithNoStorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DetectImageWithNoStorePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=publishedName")
    public String publishedName;
    public DetectImageWithNoStorePathParams withPublishedName(String publishedName) {
        this.publishedName = publishedName;
        return this;
    }
}