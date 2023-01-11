package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations
 * The network-wide destinations for all alerts on the network.
**/
public class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allAdmins")
    public Boolean allAdmins;
    public UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations withAllAdmins(Boolean allAdmins) {
        this.allAdmins = allAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public String[] emails;
    public UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpServerIds")
    public String[] httpServerIds;
    public UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations withHttpServerIds(String[] httpServerIds) {
        this.httpServerIds = httpServerIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snmp")
    public Boolean snmp;
    public UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations withSnmp(Boolean snmp) {
        this.snmp = snmp;
        return this;
    }
}