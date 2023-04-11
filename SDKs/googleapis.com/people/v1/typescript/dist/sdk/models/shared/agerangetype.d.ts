import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
/**
 * The age range.
 */
export declare enum AgeRangeTypeAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    LessThanEighteen = "LESS_THAN_EIGHTEEN",
    EighteenToTwenty = "EIGHTEEN_TO_TWENTY",
    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}
/**
 * A person's age range.
 */
export declare class AgeRangeType extends SpeakeasyBase {
    /**
     * The age range.
     */
    ageRange?: AgeRangeTypeAgeRangeEnum;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
}
