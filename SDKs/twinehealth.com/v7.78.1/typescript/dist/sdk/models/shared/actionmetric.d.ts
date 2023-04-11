import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionMetricValidationsMaximum extends SpeakeasyBase {
    unit?: string;
    value?: number;
}
export declare class ActionMetricValidationsMinimum extends SpeakeasyBase {
    unit?: string;
    value?: number;
}
export declare class ActionMetricValidations extends SpeakeasyBase {
    maximum?: ActionMetricValidationsMaximum;
    minimum?: ActionMetricValidationsMinimum;
}
export declare class ActionMetric extends SpeakeasyBase {
    goal?: Record<string, any>;
    metricType?: string;
    unit?: string;
    validations?: ActionMetricValidations;
}
