import { SpeakeasyBase } from "../../../internal/utils";
import { AuthConfigTemplate } from "./authconfigtemplate";
import { ConfigVariableTemplate } from "./configvariabletemplate";
import { EgressControlConfig } from "./egresscontrolconfig";
import { RoleGrant } from "./rolegrant";
import { SslConfigTemplate } from "./sslconfigtemplate";
import { SupportedRuntimeFeatures } from "./supportedruntimefeatures";
/**
 * Output only. Flag to mark the version indicating the launch stage.
 */
export declare enum ConnectorVersionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    PrivatePreview = "PRIVATE_PREVIEW"
}
/**
 * ConnectorVersion indicates a specific version of a connector.
 */
export declare class ConnectorVersion extends SpeakeasyBase {
    /**
     * Output only. List of auth configs supported by the Connector Version.
     */
    authConfigTemplates?: AuthConfigTemplate[];
    /**
     * Output only. List of config variables needed to create a connection.
     */
    configVariableTemplates?: ConfigVariableTemplate[];
    /**
     * Output only. Created time.
     */
    createTime?: string;
    /**
     * Output only. Display name.
     */
    displayName?: string;
    /**
     * Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
     */
    egressControlConfig?: EgressControlConfig;
    /**
     * Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Output only. Flag to mark the version indicating the launch stage.
     */
    launchStage?: ConnectorVersionLaunchStageEnum;
    /**
     * Output only. Resource name of the Version. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} Only global location is supported for Connector resource.
     */
    name?: string;
    /**
     * Output only. ReleaseVersion of the connector, for example: "1.0.1-alpha".
     */
    releaseVersion?: string;
    /**
     * This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
     */
    roleGrant?: RoleGrant;
    /**
     * Output only. Role grant configurations for this connector version.
     */
    roleGrants?: RoleGrant[];
    /**
     * Ssl config details of a connector version
     */
    sslConfigTemplate?: SslConfigTemplate;
    /**
     * Supported runtime features of a connector version. This is passed to the management layer to add a new connector version by the connector developer. Details about how this proto is passed to the management layer is covered in this doc - go/runtime-manifest.
     */
    supportedRuntimeFeatures?: SupportedRuntimeFeatures;
    /**
     * Output only. Updated time.
     */
    updateTime?: string;
}
