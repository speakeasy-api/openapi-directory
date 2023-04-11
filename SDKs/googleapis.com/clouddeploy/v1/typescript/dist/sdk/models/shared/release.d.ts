import { SpeakeasyBase } from "../../../internal/utils";
import { BuildArtifact } from "./buildartifact";
import { DeliveryPipeline, DeliveryPipelineInput } from "./deliverypipeline";
import { ReleaseCondition } from "./releasecondition";
import { Target } from "./target";
import { TargetArtifact } from "./targetartifact";
import { TargetRender } from "./targetrender";
/**
 * Output only. Current state of the render operation.
 */
export declare enum ReleaseRenderStateEnum {
    RenderStateUnspecified = "RENDER_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
 */
export declare class Release extends SpeakeasyBase {
    /**
     * Output only. Indicates whether this is an abandoned release.
     */
    abandoned?: boolean;
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * List of artifacts to pass through to Skaffold command.
     */
    buildArtifacts?: BuildArtifact[];
    /**
     * ReleaseCondition contains all conditions relevant to a Release.
     */
    condition?: ReleaseCondition;
    /**
     * Output only. Time at which the `Release` was created.
     */
    createTime?: string;
    /**
     * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
     */
    deliveryPipelineSnapshot?: DeliveryPipeline;
    /**
     * Description of the `Release`. Max length is 255 characters.
     */
    description?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Name of the `Release`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/a-z{0,62}.
     */
    name?: string;
    /**
     * Output only. Time at which the render completed.
     */
    renderEndTime?: string;
    /**
     * Output only. Time at which the render began.
     */
    renderStartTime?: string;
    /**
     * Output only. Current state of the render operation.
     */
    renderState?: ReleaseRenderStateEnum;
    /**
     * Filepath of the Skaffold config inside of the config URI.
     */
    skaffoldConfigPath?: string;
    /**
     * Cloud Storage URI of tar.gz archive containing Skaffold configuration.
     */
    skaffoldConfigUri?: string;
    /**
     * The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Google Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.
     */
    skaffoldVersion?: string;
    /**
     * Output only. Map from target ID to the target artifacts created during the render operation.
     */
    targetArtifacts?: Record<string, TargetArtifact>;
    /**
     * Output only. Map from target ID to details of the render operation for that target.
     */
    targetRenders?: Record<string, TargetRender>;
    /**
     * Output only. Snapshot of the targets taken at release creation time.
     */
    targetSnapshots?: Target[];
    /**
     * Output only. Unique identifier of the `Release`.
     */
    uid?: string;
}
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
 */
export declare class ReleaseInput extends SpeakeasyBase {
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * List of artifacts to pass through to Skaffold command.
     */
    buildArtifacts?: BuildArtifact[];
    /**
     * ReleaseCondition contains all conditions relevant to a Release.
     */
    condition?: ReleaseCondition;
    /**
     * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
     */
    deliveryPipelineSnapshot?: DeliveryPipelineInput;
    /**
     * Description of the `Release`. Max length is 255 characters.
     */
    description?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Name of the `Release`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/a-z{0,62}.
     */
    name?: string;
    /**
     * Filepath of the Skaffold config inside of the config URI.
     */
    skaffoldConfigPath?: string;
    /**
     * Cloud Storage URI of tar.gz archive containing Skaffold configuration.
     */
    skaffoldConfigUri?: string;
    /**
     * The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Google Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.
     */
    skaffoldVersion?: string;
}
