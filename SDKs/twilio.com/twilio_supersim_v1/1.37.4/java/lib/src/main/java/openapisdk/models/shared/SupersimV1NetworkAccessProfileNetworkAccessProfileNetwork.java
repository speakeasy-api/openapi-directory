package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifiers")
    public Object[] identifiers;
    public SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork withIdentifiers(Object[] identifiers) {
        this.identifiers = identifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_access_profile_sid")
    public String networkAccessProfileSid;
    public SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork withNetworkAccessProfileSid(String networkAccessProfileSid) {
        this.networkAccessProfileSid = networkAccessProfileSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork withUrl(String url) {
        this.url = url;
        return this;
    }
}