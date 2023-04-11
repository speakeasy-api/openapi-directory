import { SpeakeasyBase } from "../../../internal/utils";
import { ExecStepConfig } from "./execstepconfig";
/**
 * A step that runs an executable for a PatchJob.
 */
export declare class ExecStep extends SpeakeasyBase {
    /**
     * Common configurations for an ExecStep.
     */
    linuxExecStepConfig?: ExecStepConfig;
    /**
     * Common configurations for an ExecStep.
     */
    windowsExecStepConfig?: ExecStepConfig;
}
