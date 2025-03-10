/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApproveAnAccountTransferDefaultApplicationJSON11 {
    @JsonProperty("detail")
    public String detail;

    public ApproveAnAccountTransferDefaultApplicationJSON11 withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    
    @JsonProperty("status")
    public ApproveAnAccountTransferDefaultApplicationJSON11StatusEnum status;

    public ApproveAnAccountTransferDefaultApplicationJSON11 withStatus(ApproveAnAccountTransferDefaultApplicationJSON11StatusEnum status) {
        this.status = status;
        return this;
    }
    
    @JsonProperty("title")
    public String title;

    public ApproveAnAccountTransferDefaultApplicationJSON11 withTitle(String title) {
        this.title = title;
        return this;
    }
    
    @JsonProperty("type")
    public ApproveAnAccountTransferDefaultApplicationJSON11TypeEnum type;

    public ApproveAnAccountTransferDefaultApplicationJSON11 withType(ApproveAnAccountTransferDefaultApplicationJSON11TypeEnum type) {
        this.type = type;
        return this;
    }
    
    public ApproveAnAccountTransferDefaultApplicationJSON11(@JsonProperty("detail") String detail, @JsonProperty("status") ApproveAnAccountTransferDefaultApplicationJSON11StatusEnum status, @JsonProperty("title") String title, @JsonProperty("type") ApproveAnAccountTransferDefaultApplicationJSON11TypeEnum type) {
        this.detail = detail;
        this.status = status;
        this.title = title;
        this.type = type;
  }
}
