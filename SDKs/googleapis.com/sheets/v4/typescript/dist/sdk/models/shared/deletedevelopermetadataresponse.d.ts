import { SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadata } from "./developermetadata";
/**
 * The response from deleting developer metadata.
 */
export declare class DeleteDeveloperMetadataResponse extends SpeakeasyBase {
    /**
     * The metadata that was deleted.
     */
    deletedDeveloperMetadata?: DeveloperMetadata[];
}
