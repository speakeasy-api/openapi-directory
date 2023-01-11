package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAnnouncementsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public PostAnnouncementsRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostAnnouncementsRequestBody withFile(String file) {
        this.file = file;
        return this;
    }
}