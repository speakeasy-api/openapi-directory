/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum - The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
 */
public enum UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    APPLICATION("application"),
    APPLICATION_CATEGORY("applicationCategory"),
    HOST("host"),
    IP_RANGE("ipRange"),
    LOCAL_NET("localNet"),
    PORT("port");

    @JsonValue
    public final String value;

    private UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum(String value) {
        this.value = value;
    }
}
