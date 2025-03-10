/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FullyQualifiedDomainNameInfo {
    /**
     * Fully qualified domain name where the filter should be hosted for install/upgrade operations.
     */
    @JsonProperty("fqdn")
    public String fqdn;

    public FullyQualifiedDomainNameInfo withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    
    public FullyQualifiedDomainNameInfo(@JsonProperty("fqdn") String fqdn) {
        this.fqdn = fqdn;
  }
}
