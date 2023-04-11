import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model Metrics
 */
export declare class Metrics extends SpeakeasyBase {
    algorithm?: string;
    /**
     * Date and time that the model was created.
     */
    createdAt?: Date;
    /**
     * Model Id
     */
    id?: string;
    language?: string;
    /**
     * Model metrics values.
     */
    metricsData?: Record<string, any>;
    object?: string;
}
