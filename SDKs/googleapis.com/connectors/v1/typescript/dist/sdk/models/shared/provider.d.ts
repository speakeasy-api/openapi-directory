import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Flag to mark the version indicating the launch stage.
 */
export declare enum ProviderLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    PrivatePreview = "PRIVATE_PREVIEW"
}
/**
 * Provider indicates the owner who provides the connectors.
 */
export declare class Provider extends SpeakeasyBase {
    /**
     * Output only. Created time.
     */
    createTime?: string;
    /**
     * Output only. Description of the resource.
     */
    description?: string;
    /**
     * Output only. Display name.
     */
    displayName?: string;
    /**
     * Output only. Link to documentation page.
     */
    documentationUri?: string;
    /**
     * Output only. Link to external page.
     */
    externalUri?: string;
    /**
     * Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Output only. Flag to mark the version indicating the launch stage.
     */
    launchStage?: ProviderLaunchStageEnum;
    /**
     * Output only. Resource name of the Provider. Format: projects/{project}/locations/{location}/providers/{provider} Only global location is supported for Provider resource.
     */
    name?: string;
    /**
     * Output only. Updated time.
     */
    updateTime?: string;
    /**
     * Output only. Cloud storage location of icons etc consumed by UI.
     */
    webAssetsLocation?: string;
}
