package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_img_url")
    public String previewImgUrl;
    public PreviewResponse withPreviewImgUrl(String previewImgUrl) {
        this.previewImgUrl = previewImgUrl;
        return this;
    }
}