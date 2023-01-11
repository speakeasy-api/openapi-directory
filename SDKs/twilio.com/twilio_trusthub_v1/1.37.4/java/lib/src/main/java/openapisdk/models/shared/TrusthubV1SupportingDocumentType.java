package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TrusthubV1SupportingDocumentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Object[] fields;
    public TrusthubV1SupportingDocumentType withFields(Object[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public TrusthubV1SupportingDocumentType withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine_name")
    public String machineName;
    public TrusthubV1SupportingDocumentType withMachineName(String machineName) {
        this.machineName = machineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TrusthubV1SupportingDocumentType withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TrusthubV1SupportingDocumentType withUrl(String url) {
        this.url = url;
        return this;
    }
}