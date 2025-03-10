/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateActiveWidgetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.ActiveWidget activeWidget;

    public CreateActiveWidgetRequest withActiveWidget(org.openapis.openapi.models.shared.ActiveWidget activeWidget) {
        this.activeWidget = activeWidget;
        return this;
    }
    
    /**
     * Continuous project ID
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;

    public CreateActiveWidgetRequest withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    
    public CreateActiveWidgetRequest(@JsonProperty("projectId") Long projectId) {
        this.projectId = projectId;
  }
}
