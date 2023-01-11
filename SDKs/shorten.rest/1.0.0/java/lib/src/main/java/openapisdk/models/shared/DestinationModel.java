package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DestinationModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public DestinationModel withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os")
    public String os;
    public DestinationModel withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public DestinationModel withUrl(String url) {
        this.url = url;
        return this;
    }
}