import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.
 */
export declare class CorrelationStats extends SpeakeasyBase {
    /**
     * The correlation value using the Cramer's V measure.
     */
    cramersV?: number;
}
