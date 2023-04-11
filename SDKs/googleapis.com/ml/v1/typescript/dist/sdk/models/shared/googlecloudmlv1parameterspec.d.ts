import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).
 */
export declare enum GoogleCloudMlV1ParameterSpecScaleTypeEnum {
    None = "NONE",
    UnitLinearScale = "UNIT_LINEAR_SCALE",
    UnitLogScale = "UNIT_LOG_SCALE",
    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}
/**
 * Required. The type of the parameter.
 */
export declare enum GoogleCloudMlV1ParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    Integer = "INTEGER",
    Categorical = "CATEGORICAL",
    Discrete = "DISCRETE"
}
/**
 * Represents a single hyperparameter to optimize.
 */
export declare class GoogleCloudMlV1ParameterSpec extends SpeakeasyBase {
    /**
     * Required if type is `CATEGORICAL`. The list of possible categories.
     */
    categoricalValues?: string[];
    /**
     * Required if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
     */
    discreteValues?: number[];
    /**
     * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`.
     */
    maxValue?: number;
    /**
     * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER.
     */
    minValue?: number;
    /**
     * Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., "learning_rate".
     */
    parameterName?: string;
    /**
     * Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).
     */
    scaleType?: GoogleCloudMlV1ParameterSpecScaleTypeEnum;
    /**
     * Required. The type of the parameter.
     */
    type?: GoogleCloudMlV1ParameterSpecTypeEnum;
}
