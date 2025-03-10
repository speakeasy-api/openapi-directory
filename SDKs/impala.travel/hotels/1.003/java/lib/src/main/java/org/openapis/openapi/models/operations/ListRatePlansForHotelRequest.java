/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListRatePlansForHotelRequest {
    /**
     * Start date of the considered time window for the returned rate plan.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;

    public ListRatePlansForHotelRequest withEnd(String end) {
        this.end = end;
        return this;
    }
    
    /**
     * The uuid of hotel for which rate plans are being fetched.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hotelId")
    public String hotelId;

    public ListRatePlansForHotelRequest withHotelId(String hotelId) {
        this.hotelId = hotelId;
        return this;
    }
    
    /**
     * Offset from the first rate plan in the result (for pagination).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Double offset;

    public ListRatePlansForHotelRequest withOffset(Double offset) {
        this.offset = offset;
        return this;
    }
    
    /**
     * The UUID of room for which rate plans are being fetched.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roomId")
    public String roomId;

    public ListRatePlansForHotelRequest withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
    
    /**
     * Number of rate plans returned on a given page (pagination).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;

    public ListRatePlansForHotelRequest withSize(Double size) {
        this.size = size;
        return this;
    }
    
    /**
     * Start date of the considered time window for the returned rate plan.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;

    public ListRatePlansForHotelRequest withStart(String start) {
        this.start = start;
        return this;
    }
    
    /**
     * Returns rate plans changed after the supplied date.
     */
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=updatedAt")
    public java.util.Map<String, Object> updatedAt;

    public ListRatePlansForHotelRequest withUpdatedAt(java.util.Map<String, Object> updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    public ListRatePlansForHotelRequest(@JsonProperty("hotelId") String hotelId) {
        this.hotelId = hotelId;
  }
}
