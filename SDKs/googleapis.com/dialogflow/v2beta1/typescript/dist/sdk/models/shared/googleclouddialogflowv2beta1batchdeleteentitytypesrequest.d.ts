import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for EntityTypes.BatchDeleteEntityTypes.
 */
export declare class GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest extends SpeakeasyBase {
    /**
     * Required. The names entity types to delete. All names must point to the same agent as `parent`.
     */
    entityTypeNames?: string[];
}
