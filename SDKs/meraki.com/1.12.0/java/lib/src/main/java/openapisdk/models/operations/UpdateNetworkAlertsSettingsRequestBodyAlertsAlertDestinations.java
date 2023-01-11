package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations
 * A hash of destinations for this specific alert
**/
public class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allAdmins")
    public Boolean allAdmins;
    public UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations withAllAdmins(Boolean allAdmins) {
        this.allAdmins = allAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public String[] emails;
    public UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpServerIds")
    public String[] httpServerIds;
    public UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations withHttpServerIds(String[] httpServerIds) {
        this.httpServerIds = httpServerIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snmp")
    public Boolean snmp;
    public UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations withSnmp(Boolean snmp) {
        this.snmp = snmp;
        return this;
    }
}