package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImagesDeleteAllResponse
 * Response for deleting all images.
**/
public class ImagesDeleteAllResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Image[] deleted;
    public ImagesDeleteAllResponse withDeleted(Image[] deleted) {
        this.deleted = deleted;
        return this;
    }
}