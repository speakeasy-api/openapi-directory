import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Workflow program to be executed by Workflows.
 */
export declare class WorkflowInput extends SpeakeasyBase {
    /**
     * Description of the workflow provided by the user. Must be at most 1000 unicode characters long.
     */
    description?: string;
    /**
     * Labels associated with this workflow. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow}
     */
    name?: string;
    /**
     * The service account associated with the latest workflow version. This service account represents the identity of the workflow and determines what permissions the workflow has. Format: projects/{project}/serviceAccounts/{account} or {account} Using `-` as a wildcard for the `{project}` or not providing one at all will infer the project from the account. The `{account}` value can be the `email` address or the `unique_id` of the service account. If not provided, workflow will use the project's default service account. Modifying this field for an existing workflow results in a new workflow revision.
     */
    serviceAccount?: string;
    /**
     * Workflow code to be executed. The size limit is 128KB.
     */
    sourceContents?: string;
}
/**
 * Output only. State of the workflow deployment.
 */
export declare enum WorkflowStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE"
}
/**
 * Workflow program to be executed by Workflows.
 */
export declare class Workflow extends SpeakeasyBase {
    /**
     * Output only. The timestamp for when the workflow was created.
     */
    createTime?: string;
    /**
     * Description of the workflow provided by the user. Must be at most 1000 unicode characters long.
     */
    description?: string;
    /**
     * Labels associated with this workflow. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow}
     */
    name?: string;
    /**
     * Output only. The timestamp for the latest revision of the workflow's creation.
     */
    revisionCreateTime?: string;
    /**
     * Output only. The revision of the workflow. A new revision of a workflow is created as a result of updating the following properties of a workflow: - Service account - Workflow code to be executed The format is "000001-a4d", where the first 6 characters define the zero-padded revision ordinal number. They are followed by a hyphen and 3 hexadecimal random characters.
     */
    revisionId?: string;
    /**
     * The service account associated with the latest workflow version. This service account represents the identity of the workflow and determines what permissions the workflow has. Format: projects/{project}/serviceAccounts/{account} or {account} Using `-` as a wildcard for the `{project}` or not providing one at all will infer the project from the account. The `{account}` value can be the `email` address or the `unique_id` of the service account. If not provided, workflow will use the project's default service account. Modifying this field for an existing workflow results in a new workflow revision.
     */
    serviceAccount?: string;
    /**
     * Workflow code to be executed. The size limit is 128KB.
     */
    sourceContents?: string;
    /**
     * Output only. State of the workflow deployment.
     */
    state?: WorkflowStateEnum;
    /**
     * Output only. The timestamp for when the workflow was last updated.
     */
    updateTime?: string;
}
