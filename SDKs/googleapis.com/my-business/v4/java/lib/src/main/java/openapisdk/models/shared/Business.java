package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Business
 * Features of the property of specific interest to the business traveler.
**/
public class Business {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessCenter")
    public Boolean businessCenter;
    public Business withBusinessCenter(Boolean businessCenter) {
        this.businessCenter = businessCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessCenterException")
    public BusinessBusinessCenterExceptionEnum businessCenterException;
    public Business withBusinessCenterException(BusinessBusinessCenterExceptionEnum businessCenterException) {
        this.businessCenterException = businessCenterException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetingRooms")
    public Boolean meetingRooms;
    public Business withMeetingRooms(Boolean meetingRooms) {
        this.meetingRooms = meetingRooms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetingRoomsCount")
    public Integer meetingRoomsCount;
    public Business withMeetingRoomsCount(Integer meetingRoomsCount) {
        this.meetingRoomsCount = meetingRoomsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetingRoomsCountException")
    public BusinessMeetingRoomsCountExceptionEnum meetingRoomsCountException;
    public Business withMeetingRoomsCountException(BusinessMeetingRoomsCountExceptionEnum meetingRoomsCountException) {
        this.meetingRoomsCountException = meetingRoomsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetingRoomsException")
    public BusinessMeetingRoomsExceptionEnum meetingRoomsException;
    public Business withMeetingRoomsException(BusinessMeetingRoomsExceptionEnum meetingRoomsException) {
        this.meetingRoomsException = meetingRoomsException;
        return this;
    }
}