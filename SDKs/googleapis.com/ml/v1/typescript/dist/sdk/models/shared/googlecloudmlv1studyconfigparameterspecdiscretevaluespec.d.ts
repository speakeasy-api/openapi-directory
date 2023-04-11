import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec extends SpeakeasyBase {
    /**
     * Must be specified if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
     */
    values?: number[];
}
