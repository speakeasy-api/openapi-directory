import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineMigrationTarget } from "./computeenginemigrationtarget";
import { FitDescriptor } from "./fitdescriptor";
/**
 * An insight about potential migrations for an asset.
 */
export declare class MigrationInsight extends SpeakeasyBase {
    /**
     * Compute engine migration target.
     */
    computeEngineTarget?: ComputeEngineMigrationTarget;
    /**
     * Describes the fit level of an asset for migration to a specific target.
     */
    fit?: FitDescriptor;
    /**
     * GKE migration target.
     */
    gkeTarget?: Record<string, any>;
    /**
     * VMWare engine migration target.
     */
    vmwareEngineTarget?: Record<string, any>;
}
