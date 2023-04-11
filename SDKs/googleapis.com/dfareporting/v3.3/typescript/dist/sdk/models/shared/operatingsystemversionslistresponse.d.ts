import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemVersion } from "./operatingsystemversion";
/**
 * Operating System Version List Response
 */
export declare class OperatingSystemVersionsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse".
     */
    kind?: string;
    /**
     * Operating system version collection.
     */
    operatingSystemVersions?: OperatingSystemVersion[];
}
