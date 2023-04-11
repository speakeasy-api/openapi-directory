import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for 'ConvertConversionWorkspace' request.
 */
export declare class ConvertConversionWorkspaceRequest extends SpeakeasyBase {
    /**
     * Specifies whether the conversion workspace is to be committed automatically after the conversion.
     */
    autoCommit?: boolean;
    /**
     * Filter the entities to convert. Leaving this field empty will convert all of the entities. Supports Google AIP-160 style filtering.
     */
    filter?: string;
}
