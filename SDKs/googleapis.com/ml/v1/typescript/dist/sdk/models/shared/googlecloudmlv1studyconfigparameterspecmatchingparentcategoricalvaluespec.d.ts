import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the spec to match categorical values from parent parameter.
 */
export declare class GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec extends SpeakeasyBase {
    /**
     * Matches values of the parent parameter with type 'CATEGORICAL'. All values must exist in `categorical_value_spec` of parent parameter.
     */
    values?: string[];
}
