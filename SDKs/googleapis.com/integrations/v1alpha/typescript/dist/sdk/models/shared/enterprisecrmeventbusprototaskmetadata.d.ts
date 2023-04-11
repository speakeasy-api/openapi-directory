import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskMetadataAdmin } from "./enterprisecrmeventbusprototaskmetadataadmin";
export declare enum EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum {
    UnspecifiedCategory = "UNSPECIFIED_CATEGORY",
    Custom = "CUSTOM",
    FlowControl = "FLOW_CONTROL",
    DataManipulation = "DATA_MANIPULATION",
    Scripting = "SCRIPTING",
    Connector = "CONNECTOR",
    Hidden = "HIDDEN",
    CloudSystems = "CLOUD_SYSTEMS",
    CustomTaskTemplate = "CUSTOM_TASK_TEMPLATE",
    TaskRecommendations = "TASK_RECOMMENDATIONS"
}
/**
 * Controls whether JSON workflow parameters are validated against provided schemas before and/or after this task's execution.
 */
export declare enum EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}
export declare enum EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum {
    UnspecifiedExternalCategory = "UNSPECIFIED_EXTERNAL_CATEGORY",
    Core = "CORE",
    Connectors = "CONNECTORS"
}
/**
 * Allows author to indicate if the task is ready to use or not. If not set, then it will default to INACTIVE.
 */
export declare enum EnterpriseCrmEventbusProtoTaskMetadataStatusEnum {
    UnspecifiedStatus = "UNSPECIFIED_STATUS",
    DefaultInactive = "DEFAULT_INACTIVE",
    Active = "ACTIVE"
}
export declare enum EnterpriseCrmEventbusProtoTaskMetadataSystemEnum {
    UnspecifiedSystem = "UNSPECIFIED_SYSTEM",
    Generic = "GENERIC",
    Buganizer = "BUGANIZER",
    Salesforce = "SALESFORCE",
    CloudSql = "CLOUD_SQL",
    Plx = "PLX",
    Sheets = "SHEETS",
    GoogleGroups = "GOOGLE_GROUPS",
    Email = "EMAIL",
    Spanner = "SPANNER",
    DataBridge = "DATA_BRIDGE"
}
/**
 * TaskMetadata are attributes that are associated to every common Task we have.
 */
export declare class EnterpriseCrmEventbusProtoTaskMetadata extends SpeakeasyBase {
    /**
     * The new task name to replace the current task if it is deprecated. Otherwise, it is the same as the current task name.
     */
    activeTaskName?: string;
    admins?: EnterpriseCrmEventbusProtoTaskMetadataAdmin[];
    category?: EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;
    /**
     * The Code Search link to the Task Java file.
     */
    codeSearchLink?: string;
    /**
     * Controls whether JSON workflow parameters are validated against provided schemas before and/or after this task's execution.
     */
    defaultJsonValidationOption?: EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;
    /**
     * Contains the initial configuration of the task with default values set. For now, The string should be compatible to an ASCII-proto format.
     */
    defaultSpec?: string;
    /**
     * In a few sentences, describe the purpose and usage of the task.
     */
    description?: string;
    /**
     * The string name to show on the task list on the Workflow editor screen. This should be a very short, one to two words name for the task. (e.g. "Send Mail")
     */
    descriptiveName?: string;
    /**
     * Snippet of markdown documentation to embed in the RHP for this task.
     */
    docMarkdown?: string;
    externalCategory?: EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;
    /**
     * Sequence with which the task in specific category to be displayed in task discovery panel for external users.
     */
    externalCategorySequence?: number;
    /**
     * External-facing documention embedded in the RHP for this task.
     */
    externalDocHtml?: string;
    /**
     * Doc link for external-facing documentation (separate from g3doc).
     */
    externalDocLink?: string;
    /**
     * DEPRECATED: Use external_doc_html.
     */
    externalDocMarkdown?: string;
    /**
     * URL to the associated G3 Doc for the task if available
     */
    g3DocLink?: string;
    /**
     * URL to gstatic image icon for this task. This icon shows up on the task list panel along with the task name in the Workflow Editor screen. Use the 24p, 2x, gray color icon image format.
     */
    iconLink?: string;
    /**
     * The deprecation status of the current task. Default value is false;
     */
    isDeprecated?: boolean;
    /**
     * The actual class name or the annotated name of the task. Task Author should initialize this field with value from the getName() method of the Task class.
     */
    name?: string;
    /**
     * External-facing documention for standalone IP in pantheon embedded in the RHP for this task. Non null only if different from external_doc_html
     */
    standaloneExternalDocHtml?: string;
    /**
     * Allows author to indicate if the task is ready to use or not. If not set, then it will default to INACTIVE.
     */
    status?: EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;
    system?: EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;
    /**
     * A set of tags that pertain to a particular task. This can be used to improve the searchability of tasks with several names ("REST Caller" vs. "Call REST Endpoint") or to help users find tasks based on related words.
     */
    tags?: string[];
}
