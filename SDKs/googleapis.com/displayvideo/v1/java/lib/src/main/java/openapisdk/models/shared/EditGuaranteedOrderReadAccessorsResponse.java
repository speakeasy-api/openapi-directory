package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditGuaranteedOrderReadAccessorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAccessInherited")
    public Boolean readAccessInherited;
    public EditGuaranteedOrderReadAccessorsResponse withReadAccessInherited(Boolean readAccessInherited) {
        this.readAccessInherited = readAccessInherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAdvertiserIds")
    public String[] readAdvertiserIds;
    public EditGuaranteedOrderReadAccessorsResponse withReadAdvertiserIds(String[] readAdvertiserIds) {
        this.readAdvertiserIds = readAdvertiserIds;
        return this;
    }
}