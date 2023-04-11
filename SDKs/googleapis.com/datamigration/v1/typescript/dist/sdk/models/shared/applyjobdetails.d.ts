import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details regarding an Apply background job.
 */
export declare class ApplyJobDetails extends SpeakeasyBase {
    /**
     * The connection profile which was used for the apply job.
     */
    connectionProfile?: string;
    /**
     * AIP-160 based filter used to specify the entities to apply
     */
    filter?: string;
}
