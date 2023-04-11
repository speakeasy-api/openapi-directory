import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Business center exception.
 */
export declare enum BusinessBusinessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Meeting rooms count exception.
 */
export declare enum BusinessMeetingRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Meeting rooms exception.
 */
export declare enum BusinessMeetingRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Features of the property of specific interest to the business traveler.
 */
export declare class Business extends SpeakeasyBase {
    /**
     * Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room.
     */
    businessCenter?: boolean;
    /**
     * Business center exception.
     */
    businessCenterException?: BusinessBusinessCenterExceptionEnum;
    /**
     * Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms.
     */
    meetingRooms?: boolean;
    /**
     * Meeting rooms count. The number of meeting rooms at the property.
     */
    meetingRoomsCount?: number;
    /**
     * Meeting rooms count exception.
     */
    meetingRoomsCountException?: BusinessMeetingRoomsCountExceptionEnum;
    /**
     * Meeting rooms exception.
     */
    meetingRoomsException?: BusinessMeetingRoomsExceptionEnum;
}
