/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApproveAWireTransferDefaultApplicationJSON4 {
    @JsonProperty("detail")
    public String detail;

    public ApproveAWireTransferDefaultApplicationJSON4 withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    
    @JsonProperty("status")
    public ApproveAWireTransferDefaultApplicationJSON4StatusEnum status;

    public ApproveAWireTransferDefaultApplicationJSON4 withStatus(ApproveAWireTransferDefaultApplicationJSON4StatusEnum status) {
        this.status = status;
        return this;
    }
    
    @JsonProperty("title")
    public String title;

    public ApproveAWireTransferDefaultApplicationJSON4 withTitle(String title) {
        this.title = title;
        return this;
    }
    
    @JsonProperty("type")
    public ApproveAWireTransferDefaultApplicationJSON4TypeEnum type;

    public ApproveAWireTransferDefaultApplicationJSON4 withType(ApproveAWireTransferDefaultApplicationJSON4TypeEnum type) {
        this.type = type;
        return this;
    }
    
    public ApproveAWireTransferDefaultApplicationJSON4(@JsonProperty("detail") String detail, @JsonProperty("status") ApproveAWireTransferDefaultApplicationJSON4StatusEnum status, @JsonProperty("title") String title, @JsonProperty("type") ApproveAWireTransferDefaultApplicationJSON4TypeEnum type) {
        this.detail = detail;
        this.status = status;
        this.title = title;
        this.type = type;
  }
}
