import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeOffTypeResourceAttributes extends SpeakeasyBase {
    name?: string;
}
/**
 * Time-off type resource name
 */
export declare enum TimeOffTypeResourceTypeEnum {
    TimeOffType = "TimeOffType"
}
export declare class TimeOffTypeResource extends SpeakeasyBase {
    attributes?: TimeOffTypeResourceAttributes;
    /**
     * identifier
     */
    id?: number;
    /**
     * Time-off type resource name
     */
    type?: TimeOffTypeResourceTypeEnum;
}
