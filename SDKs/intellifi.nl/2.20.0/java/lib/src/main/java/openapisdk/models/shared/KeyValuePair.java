package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyValuePair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public KeyValuePair withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kv_key")
    public String kvKey;
    public KeyValuePair withKvKey(String kvKey) {
        this.kvKey = kvKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kv_value")
    public Object kvValue;
    public KeyValuePair withKvValue(Object kvValue) {
        this.kvValue = kvValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public KeyValuePair withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;
    public KeyValuePair withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public KeyValuePair withUrl(String url) {
        this.url = url;
        return this;
    }
}