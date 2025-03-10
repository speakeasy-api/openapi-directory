/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DiscoveredNasShare {
    /**
     * The NFS export point or SMB share name for the NAS share.
     */
    @JsonProperty("exportPoint")
    public String exportPoint;

    public DiscoveredNasShare withExportPoint(String exportPoint) {
        this.exportPoint = exportPoint;
        return this;
    }
    
    /**
     * The type of NAS Share.
     */
    @JsonProperty("shareType")
    public DiscoveredNasShareShareTypeEnum shareType;

    public DiscoveredNasShare withShareType(DiscoveredNasShareShareTypeEnum shareType) {
        this.shareType = shareType;
        return this;
    }
    
    public DiscoveredNasShare(@JsonProperty("exportPoint") String exportPoint, @JsonProperty("shareType") DiscoveredNasShareShareTypeEnum shareType) {
        this.exportPoint = exportPoint;
        this.shareType = shareType;
  }
}
