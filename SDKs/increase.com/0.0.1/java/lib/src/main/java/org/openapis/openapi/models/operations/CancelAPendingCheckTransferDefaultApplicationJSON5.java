/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelAPendingCheckTransferDefaultApplicationJSON5 {
    @JsonProperty("detail")
    public String detail;

    public CancelAPendingCheckTransferDefaultApplicationJSON5 withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    
    @JsonProperty("status")
    public CancelAPendingCheckTransferDefaultApplicationJSON5StatusEnum status;

    public CancelAPendingCheckTransferDefaultApplicationJSON5 withStatus(CancelAPendingCheckTransferDefaultApplicationJSON5StatusEnum status) {
        this.status = status;
        return this;
    }
    
    @JsonProperty("title")
    public String title;

    public CancelAPendingCheckTransferDefaultApplicationJSON5 withTitle(String title) {
        this.title = title;
        return this;
    }
    
    @JsonProperty("type")
    public CancelAPendingCheckTransferDefaultApplicationJSON5TypeEnum type;

    public CancelAPendingCheckTransferDefaultApplicationJSON5 withType(CancelAPendingCheckTransferDefaultApplicationJSON5TypeEnum type) {
        this.type = type;
        return this;
    }
    
    public CancelAPendingCheckTransferDefaultApplicationJSON5(@JsonProperty("detail") String detail, @JsonProperty("status") CancelAPendingCheckTransferDefaultApplicationJSON5StatusEnum status, @JsonProperty("title") String title, @JsonProperty("type") CancelAPendingCheckTransferDefaultApplicationJSON5TypeEnum type) {
        this.detail = detail;
        this.status = status;
        this.title = title;
        this.type = type;
  }
}
