/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAlertListAlertResponse - OK
 */
public class ListAlertListAlertResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alerts")
    public org.openapis.openapi.models.shared.MonitorV1Alert[] alerts;
    public ListAlertListAlertResponse withAlerts(org.openapis.openapi.models.shared.MonitorV1Alert[] alerts) {
        this.alerts = alerts;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAlertListAlertResponseMeta meta;
    public ListAlertListAlertResponse withMeta(ListAlertListAlertResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    
}
