package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Zebra {
    @JsonProperty("alliances")
    public ZebraAlliances alliances;
    public Zebra withAlliances(ZebraAlliances alliances) {
        this.alliances = alliances;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public Zebra withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("times")
    public Double[] times;
    public Zebra withTimes(Double[] times) {
        this.times = times;
        return this;
    }
}