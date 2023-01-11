package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageIdCreateEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ImageIdCreateEntry withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagIds")
    public String[] tagIds;
    public ImageIdCreateEntry withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
}