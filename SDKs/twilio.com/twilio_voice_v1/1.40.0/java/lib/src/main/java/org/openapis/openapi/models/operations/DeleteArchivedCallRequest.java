/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.LocalDate;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteArchivedCallRequest {
    /**
     * The date of the Call in UTC.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Date")
    public LocalDate date;
    public DeleteArchivedCallRequest withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    
    /**
     * The Twilio-provided Call SID that uniquely identifies the Call resource to delete
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteArchivedCallRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
