import { SpeakeasyBase } from "../../../internal/utils";
import { ModelDescription } from "./modeldescription";
/**
 * Result of the List Domain Models operation.
 */
export declare class ListModelsResult extends SpeakeasyBase {
    /**
     * An array of supported models.
     */
    models?: ModelDescription[];
}
