import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the Symptom.
 */
export declare enum SymptomSymptomTypeEnum {
    SymptomTypeUnspecified = "SYMPTOM_TYPE_UNSPECIFIED",
    LowMemory = "LOW_MEMORY",
    OutOfMemory = "OUT_OF_MEMORY",
    ExecuteTimedOut = "EXECUTE_TIMED_OUT",
    MeshBuildFail = "MESH_BUILD_FAIL",
    HbmOutOfMemory = "HBM_OUT_OF_MEMORY",
    ProjectAbuse = "PROJECT_ABUSE"
}
/**
 * A Symptom instance.
 */
export declare class Symptom extends SpeakeasyBase {
    /**
     * Timestamp when the Symptom is created.
     */
    createTime?: string;
    /**
     * Detailed information of the current Symptom.
     */
    details?: string;
    /**
     * Type of the Symptom.
     */
    symptomType?: SymptomSymptomTypeEnum;
    /**
     * A string used to uniquely distinguish a worker within a TPU node.
     */
    workerId?: string;
}
