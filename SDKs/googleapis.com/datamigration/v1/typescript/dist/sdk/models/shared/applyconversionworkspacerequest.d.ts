import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for 'ApplyConversionWorkspace' request.
 */
export declare class ApplyConversionWorkspaceRequest extends SpeakeasyBase {
    /**
     * Fully qualified (Uri) name of the destination connection profile.
     */
    connectionProfile?: string;
    /**
     * Filter which entities to apply. Leaving this field empty will apply all of the entities. Supports Google AIP 160 based filtering.
     */
    filter?: string;
}
