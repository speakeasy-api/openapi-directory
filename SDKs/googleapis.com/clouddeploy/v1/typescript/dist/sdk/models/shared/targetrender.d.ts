import { SpeakeasyBase } from "../../../internal/utils";
import { RenderMetadata } from "./rendermetadata";
/**
 * Output only. Reason this render failed. This will always be unspecified while the render in progress.
 */
export declare enum TargetRenderFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    CloudBuildRequestFailed = "CLOUD_BUILD_REQUEST_FAILED"
}
/**
 * Output only. Current state of the render operation for this Target.
 */
export declare enum TargetRenderRenderingStateEnum {
    TargetRenderStateUnspecified = "TARGET_RENDER_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}
/**
 * Details of rendering for a single target.
 */
export declare class TargetRender extends SpeakeasyBase {
    /**
     * Output only. Reason this render failed. This will always be unspecified while the render in progress.
     */
    failureCause?: TargetRenderFailureCauseEnum;
    /**
     * Output only. Additional information about the render failure, if available.
     */
    failureMessage?: string;
    /**
     * RenderMetadata includes information associated with a `Release` render.
     */
    metadata?: RenderMetadata;
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to render the manifest for this target. Format is `projects/{project}/locations/{location}/builds/{build}`.
     */
    renderingBuild?: string;
    /**
     * Output only. Current state of the render operation for this Target.
     */
    renderingState?: TargetRenderRenderingStateEnum;
}
