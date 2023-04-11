import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to convert a dimension value to a single case.
 */
export declare class CaseExpression extends SpeakeasyBase {
    /**
     * Name of a dimension. The name must refer back to a name in dimensions field of the request.
     */
    dimensionName?: string;
}
