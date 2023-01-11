package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NumbersV2RegulatoryComplianceSupportingDocumentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Object[] fields;
    public NumbersV2RegulatoryComplianceSupportingDocumentType withFields(Object[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public NumbersV2RegulatoryComplianceSupportingDocumentType withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine_name")
    public String machineName;
    public NumbersV2RegulatoryComplianceSupportingDocumentType withMachineName(String machineName) {
        this.machineName = machineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public NumbersV2RegulatoryComplianceSupportingDocumentType withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NumbersV2RegulatoryComplianceSupportingDocumentType withUrl(String url) {
        this.url = url;
        return this;
    }
}