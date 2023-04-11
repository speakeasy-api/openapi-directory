import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Schema Response Action example `61b9eae1a7d8ac025c4c46d3`.
     */
    schemaResponseActionId: string;
    /**
     * The unique identifier of the Schema Response example `61b9cd62eb66180215222669`.
     */
    schemaResponseId: string;
}
/**
 * The name of the state of the Schema Response prior to the creation of the action.
 */
export declare enum GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributesFromStateEnum {
    Initial = "initial",
    InProgress = "in_progress",
    Approved = "approved",
    PendingModeration = "pending_moderation"
}
/**
 * The name of the state of the Schema Response after the creation of the action
 */
export declare enum GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributesToStateEnum {
    InProgress = "in_progress",
    Approved = "approved",
    PendingModeration = "pending_moderation"
}
/**
 * The name of the trigger that caused the action.
 */
export declare enum GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributesTriggerEnum {
    Submit = "submit",
    Approve = "approve",
    Accept = "accept",
    AdminReject = "admin_reject",
    ModeratorReject = "moderator_reject"
}
export declare class GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributes extends SpeakeasyBase {
    /**
     * Bool of representing whether a user created the action.
     */
    auto?: boolean;
    /**
     * A comment made explaining the reasoning of the action.
     */
    comment?: string;
    /**
     * The date the action was created.
     */
    dateCreated?: string;
    /**
     * The name of the state of the Schema Response prior to the creation of the action.
     */
    fromState?: GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributesFromStateEnum;
    /**
     * The name of the state of the Schema Response after the creation of the action
     */
    toState?: GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributesToStateEnum;
    /**
     * The name of the trigger that caused the action.
     */
    trigger?: GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributesTriggerEnum;
    /**
     * Bool of representing whether the action is visible.
     */
    visible?: boolean;
}
/**
 * URLs to alternative representations of the Registration Schema entity.
 */
export declare class GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for a Registration Schema.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the Schema Response Action entity.
 */
export declare class GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsRelationships extends SpeakeasyBase {
    /**
     * A link to the node the file is on.
     */
    creator?: string;
    /**
     * A link to the node the file is on.
     */
    target?: string;
}
/**
 * OK
 */
export declare class GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActions extends SpeakeasyBase {
    attributes?: GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsAttributes;
    /**
     * The unique identifier of the Schema Response Action.
     */
    id?: string;
    /**
     * URLs to alternative representations of the Registration Schema entity.
     */
    links?: GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the Schema Response Action entity.
     */
    relationships?: GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdSchemaResponseActionsRelationships;
    /**
     * The type identifier of the Schema Response Action (`schema-response-actions`).
     */
    type?: string;
}
export declare class GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
