import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
 */
export declare class ModelVersion extends SpeakeasyBase {
    /**
     * Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly.
     */
    dated?: string;
    /**
     * Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect guidelines in https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible
     */
    major?: number;
    /**
     * Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation.
     */
    minor?: number;
    /**
     * Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation.
     */
    patch?: number;
}
