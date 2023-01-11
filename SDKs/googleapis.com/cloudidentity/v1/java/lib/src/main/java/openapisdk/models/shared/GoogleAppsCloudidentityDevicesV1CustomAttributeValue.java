package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleAppsCloudidentityDevicesV1CustomAttributeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public GoogleAppsCloudidentityDevicesV1CustomAttributeValue withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberValue")
    public Double numberValue;
    public GoogleAppsCloudidentityDevicesV1CustomAttributeValue withNumberValue(Double numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public GoogleAppsCloudidentityDevicesV1CustomAttributeValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}