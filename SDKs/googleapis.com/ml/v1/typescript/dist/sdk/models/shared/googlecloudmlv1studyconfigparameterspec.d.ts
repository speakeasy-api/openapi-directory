import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspeccategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec } from "./googlecloudmlv1studyconfigparameterspecdoublevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec } from "./googlecloudmlv1studyconfigparameterspecintegervaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentcategoricalvaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentdiscretevaluespec";
import { GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec } from "./googlecloudmlv1studyconfigparameterspecmatchingparentintvaluespec";
/**
 * How the parameter should be scaled. Leave unset for categorical parameters.
 */
export declare enum GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum {
    ScaleTypeUnspecified = "SCALE_TYPE_UNSPECIFIED",
    UnitLinearScale = "UNIT_LINEAR_SCALE",
    UnitLogScale = "UNIT_LOG_SCALE",
    UnitReverseLogScale = "UNIT_REVERSE_LOG_SCALE"
}
/**
 * Required. The type of the parameter.
 */
export declare enum GoogleCloudMlV1StudyConfigParameterSpecTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    Integer = "INTEGER",
    Categorical = "CATEGORICAL",
    Discrete = "DISCRETE"
}
/**
 * Represents a single parameter to optimize.
 */
export declare class GoogleCloudMlV1StudyConfigParameterSpec extends SpeakeasyBase {
    categoricalValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec;
    /**
     * A child node is active if the parameter's value matches the child node's matching_parent_values. If two items in child_parameter_specs have the same name, they must have disjoint matching_parent_values.
     */
    childParameterSpecs?: GoogleCloudMlV1StudyConfigParameterSpec[];
    discreteValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec;
    doubleValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec;
    integerValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec;
    /**
     * Required. The parameter name must be unique amongst all ParameterSpecs.
     */
    parameter?: string;
    /**
     * Represents the spec to match categorical values from parent parameter.
     */
    parentCategoricalValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec;
    /**
     * Represents the spec to match discrete values from parent parameter.
     */
    parentDiscreteValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec;
    /**
     * Represents the spec to match integer values from parent parameter.
     */
    parentIntValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec;
    /**
     * How the parameter should be scaled. Leave unset for categorical parameters.
     */
    scaleType?: GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum;
    /**
     * Required. The type of the parameter.
     */
    type?: GoogleCloudMlV1StudyConfigParameterSpecTypeEnum;
}
