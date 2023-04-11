import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SchemaResponseActionReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.
     */
    schemaResponseId: string;
}
/**
 * The name of the state of the Schema Response prior to the creation of the action.
 */
export declare enum SchemaResponseActionReadSchemaResponseActionsAttributesFromStateEnum {
    Initial = "initial",
    InProgress = "in_progress",
    Approved = "approved",
    PendingModeration = "pending_moderation"
}
/**
 * The name of the state of the Schema Response after the creation of the action
 */
export declare enum SchemaResponseActionReadSchemaResponseActionsAttributesToStateEnum {
    InProgress = "in_progress",
    Approved = "approved",
    PendingModeration = "pending_moderation"
}
/**
 * The name of the trigger that caused the action.
 */
export declare enum SchemaResponseActionReadSchemaResponseActionsAttributesTriggerEnum {
    Submit = "submit",
    Approve = "approve",
    Accept = "accept",
    AdminReject = "admin_reject",
    ModeratorReject = "moderator_reject"
}
export declare class SchemaResponseActionReadSchemaResponseActionsAttributes extends SpeakeasyBase {
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
    fromState?: SchemaResponseActionReadSchemaResponseActionsAttributesFromStateEnum;
    /**
     * The name of the state of the Schema Response after the creation of the action
     */
    toState?: SchemaResponseActionReadSchemaResponseActionsAttributesToStateEnum;
    /**
     * The name of the trigger that caused the action.
     */
    trigger?: SchemaResponseActionReadSchemaResponseActionsAttributesTriggerEnum;
    /**
     * Bool of representing whether the action is visible.
     */
    visible?: boolean;
}
/**
 * URLs to alternative representations of the Registration Schema entity.
 */
export declare class SchemaResponseActionReadSchemaResponseActionsLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for a Registration Schema.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the Schema Response Action entity.
 */
export declare class SchemaResponseActionReadSchemaResponseActionsRelationships extends SpeakeasyBase {
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
export declare class SchemaResponseActionReadSchemaResponseActions extends SpeakeasyBase {
    attributes?: SchemaResponseActionReadSchemaResponseActionsAttributes;
    /**
     * The unique identifier of the Schema Response Action.
     */
    id?: string;
    /**
     * URLs to alternative representations of the Registration Schema entity.
     */
    links?: SchemaResponseActionReadSchemaResponseActionsLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the Schema Response Action entity.
     */
    relationships?: SchemaResponseActionReadSchemaResponseActionsRelationships;
    /**
     * The type identifier of the Schema Response Action (`schema-response-actions`).
     */
    type?: string;
}
export declare class SchemaResponseActionReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
