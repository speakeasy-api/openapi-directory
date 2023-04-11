import { SpeakeasyBase } from "../../../internal/utils";
/**
 * API system health status (0=offline, 1=online)
 */
export declare enum V3StatusHealthEnum {
    Zero = "0",
    One = "1"
}
export declare class V3Status extends SpeakeasyBase {
    /**
     * API system health status (0=offline, 1=online)
     */
    health?: V3StatusHealthEnum;
    /**
     * API Version number
     */
    version?: string;
}
