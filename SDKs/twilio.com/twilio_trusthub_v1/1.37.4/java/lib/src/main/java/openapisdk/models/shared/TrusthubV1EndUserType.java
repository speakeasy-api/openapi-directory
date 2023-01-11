package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TrusthubV1EndUserType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Object[] fields;
    public TrusthubV1EndUserType withFields(Object[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public TrusthubV1EndUserType withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine_name")
    public String machineName;
    public TrusthubV1EndUserType withMachineName(String machineName) {
        this.machineName = machineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TrusthubV1EndUserType withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TrusthubV1EndUserType withUrl(String url) {
        this.url = url;
        return this;
    }
}