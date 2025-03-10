/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AutoCheckInRequest {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;

    public AutoCheckInRequest withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    
    /**
     * Email address
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=emailAddress")
    public String emailAddress;

    public AutoCheckInRequest withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    
    /**
     * Ticket number
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ticketnumber")
    public String ticketnumber;

    public AutoCheckInRequest withTicketnumber(String ticketnumber) {
        this.ticketnumber = ticketnumber;
        return this;
    }
    
    public AutoCheckInRequest(@JsonProperty("Accept") String accept, @JsonProperty("emailAddress") String emailAddress, @JsonProperty("ticketnumber") String ticketnumber) {
        this.accept = accept;
        this.emailAddress = emailAddress;
        this.ticketnumber = ticketnumber;
  }
}
