package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NumbersV2RegulatoryComplianceEndUserType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Object[] fields;
    public NumbersV2RegulatoryComplianceEndUserType withFields(Object[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public NumbersV2RegulatoryComplianceEndUserType withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine_name")
    public String machineName;
    public NumbersV2RegulatoryComplianceEndUserType withMachineName(String machineName) {
        this.machineName = machineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public NumbersV2RegulatoryComplianceEndUserType withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NumbersV2RegulatoryComplianceEndUserType withUrl(String url) {
        this.url = url;
        return this;
    }
}