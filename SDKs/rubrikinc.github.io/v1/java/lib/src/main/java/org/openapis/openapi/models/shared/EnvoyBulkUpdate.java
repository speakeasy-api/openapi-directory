/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnvoyBulkUpdate {
    /**
     * ID assigned to a Rubrik Envoy object.
     */
    @JsonProperty("id")
    public String id;

    public EnvoyBulkUpdate withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonProperty("updateProperties")
    public EnvoyUpdate updateProperties;

    public EnvoyBulkUpdate withUpdateProperties(EnvoyUpdate updateProperties) {
        this.updateProperties = updateProperties;
        return this;
    }
    
    public EnvoyBulkUpdate(@JsonProperty("id") String id, @JsonProperty("updateProperties") EnvoyUpdate updateProperties) {
        this.id = id;
        this.updateProperties = updateProperties;
  }
}
