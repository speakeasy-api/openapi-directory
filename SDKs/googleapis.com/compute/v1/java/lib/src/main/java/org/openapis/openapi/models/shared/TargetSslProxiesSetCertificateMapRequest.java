/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TargetSslProxiesSetCertificateMapRequest {
    /**
     * URL of the Certificate Map to associate with this TargetSslProxy. Accepted format is //certificatemanager.googleapis.com/projects/{project }/locations/{location}/certificateMaps/{resourceName}.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateMap")
    public String certificateMap;

    public TargetSslProxiesSetCertificateMapRequest withCertificateMap(String certificateMap) {
        this.certificateMap = certificateMap;
        return this;
    }
    
    public TargetSslProxiesSetCertificateMapRequest(){}
}
