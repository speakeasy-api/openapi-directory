import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for 'SeedConversionWorkspace' request.
 */
export declare class SeedConversionWorkspaceRequest extends SpeakeasyBase {
    /**
     * Should the conversion workspace be committed automatically after the seed operation.
     */
    autoCommit?: boolean;
    /**
     * Fully qualified (Uri) name of the destination connection profile.
     */
    destinationConnectionProfile?: string;
    /**
     * Fully qualified (Uri) name of the source connection profile.
     */
    sourceConnectionProfile?: string;
}
