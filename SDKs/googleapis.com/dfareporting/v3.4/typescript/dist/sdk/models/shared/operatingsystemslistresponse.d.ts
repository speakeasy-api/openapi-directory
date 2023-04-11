import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";
/**
 * Operating System List Response
 */
export declare class OperatingSystemsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse".
     */
    kind?: string;
    /**
     * Operating system collection.
     */
    operatingSystems?: OperatingSystem[];
}
