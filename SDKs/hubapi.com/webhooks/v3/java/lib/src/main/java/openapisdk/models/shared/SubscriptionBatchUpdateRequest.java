package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubscriptionBatchUpdateRequest {
    @JsonProperty("active")
    public Boolean active;
    public SubscriptionBatchUpdateRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("id")
    public Integer id;
    public SubscriptionBatchUpdateRequest withId(Integer id) {
        this.id = id;
        return this;
    }
}