import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of Data Leak Prevention (DLP) change.
 */
export declare enum DataLeakPreventionChangeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Flagged = "FLAGGED",
    Cleared = "CLEARED"
}
/**
 * A change in the object's data leak prevention status.
 */
export declare class DataLeakPreventionChange extends SpeakeasyBase {
    /**
     * The type of Data Leak Prevention (DLP) change.
     */
    type?: DataLeakPreventionChangeTypeEnum;
}
