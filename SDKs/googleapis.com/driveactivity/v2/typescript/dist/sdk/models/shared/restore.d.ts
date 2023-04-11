import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of restore action taken.
 */
export declare enum RestoreTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Untrash = "UNTRASH"
}
/**
 * A deleted object was restored.
 */
export declare class Restore extends SpeakeasyBase {
    /**
     * The type of restore action taken.
     */
    type?: RestoreTypeEnum;
}
