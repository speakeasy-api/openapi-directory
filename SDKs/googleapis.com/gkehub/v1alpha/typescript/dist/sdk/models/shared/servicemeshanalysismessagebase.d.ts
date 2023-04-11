import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshType } from "./servicemeshtype";
/**
 * Represents how severe a message is.
 */
export declare enum ServiceMeshAnalysisMessageBaseLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * AnalysisMessageBase describes some common information that is needed for all messages.
 */
export declare class ServiceMeshAnalysisMessageBase extends SpeakeasyBase {
    /**
     * A url pointing to the Service Mesh or Istio documentation for this specific error type.
     */
    documentationUrl?: string;
    /**
     * Represents how severe a message is.
     */
    level?: ServiceMeshAnalysisMessageBaseLevelEnum;
    /**
     * A unique identifier for the type of message. Display_name is intended to be human-readable, code is intended to be machine readable. There should be a one-to-one mapping between display_name and code. (i.e. do not re-use display_names or codes between message types.) See istio.analysis.v1alpha1.AnalysisMessageBase.Type
     */
    type?: ServiceMeshType;
}
