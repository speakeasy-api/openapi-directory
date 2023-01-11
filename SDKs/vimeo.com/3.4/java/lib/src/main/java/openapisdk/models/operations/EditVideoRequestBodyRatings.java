package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyRatings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpaa")
    public EditVideoRequestBodyRatingsMpaa mpaa;
    public EditVideoRequestBodyRatings withMpaa(EditVideoRequestBodyRatingsMpaa mpaa) {
        this.mpaa = mpaa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tv")
    public EditVideoRequestBodyRatingsTv tv;
    public EditVideoRequestBodyRatings withTv(EditVideoRequestBodyRatingsTv tv) {
        this.tv = tv;
        return this;
    }
}