import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom dimension.
 */
export declare class CustomDimension extends SpeakeasyBase {
    /**
     * Slot number of custom dimension.
     */
    index?: number;
    /**
     * Value of the custom dimension. Default value (i.e. empty string) indicates clearing sesion/visitor scope custom dimension value.
     */
    value?: string;
}
