package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LibraryImagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrls")
    public String[] imageUrls;
    public LibraryImagesResponse withImageUrls(String[] imageUrls) {
        this.imageUrls = imageUrls;
        return this;
    }
}