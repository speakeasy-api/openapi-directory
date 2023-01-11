package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DocumentUploadStatusGuidList {
    @JsonProperty("ids")
    public String[] ids;
    public DocumentUploadStatusGuidList withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}