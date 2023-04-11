import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Flag to mark the version indicating the launch stage.
 */
export declare enum ConnectorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    PrivatePreview = "PRIVATE_PREVIEW"
}
/**
 * Connectors indicates a specific connector type, e.x. Salesforce, SAP etc.
 */
export declare class Connector extends SpeakeasyBase {
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
    launchStage?: ConnectorLaunchStageEnum;
    /**
     * Output only. Resource name of the Connector. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector} Only global location is supported for Connector resource.
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
