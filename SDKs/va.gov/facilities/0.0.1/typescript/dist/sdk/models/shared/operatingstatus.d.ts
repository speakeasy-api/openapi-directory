import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status codes indicate normal hours/services, limited hours/services, closed operations, or published facility notices for visitors.
 */
export declare enum OperatingStatusCodeEnum {
    Normal = "NORMAL",
    Notice = "NOTICE",
    Limited = "LIMITED",
    Closed = "CLOSED"
}
/**
 * Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
 */
export declare class OperatingStatus extends SpeakeasyBase {
    /**
     * Details of facility notices for visitors, such as messages about parking lot closures or floor visitation information.
     */
    additionalInfo?: string;
    /**
     * Status codes indicate normal hours/services, limited hours/services, closed operations, or published facility notices for visitors.
     */
    code: OperatingStatusCodeEnum;
}
