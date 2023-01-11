package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Office {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public Office withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public Office withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Office withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public String voice;
    public Office withVoice(String voice) {
        this.voice = voice;
        return this;
    }
}