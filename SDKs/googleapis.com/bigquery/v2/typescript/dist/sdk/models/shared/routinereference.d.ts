import { SpeakeasyBase } from "../../../internal/utils";
export declare class RoutineReference extends SpeakeasyBase {
    /**
     * [Required] The ID of the dataset containing this routine.
     */
    datasetId?: string;
    /**
     * [Required] The ID of the project containing this routine.
     */
    projectId?: string;
    /**
     * [Required] The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
     */
    routineId?: string;
}
