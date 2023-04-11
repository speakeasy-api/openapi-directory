import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A string that represents Schema Response state. `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you must create a Schema Response Action that triggers a new submission.
 */
export declare enum SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum {
    Initial = "initial",
    InProgress = "in_progress",
    Approved = "approved",
    PendingModeration = "pending_moderation"
}
/**
 * The properties of the Schema Response.
 */
export declare class SchemaResponsePatchSchemaResponsesAttributesInput extends SpeakeasyBase {
    /**
     * The date the Schema Response was created
     */
    dateCreated?: number;
    /**
     * The date the Schema Response was most recently changed.
     */
    dateModified?: number;
    /**
     * The date the Schema Response was submitted for approval.
     */
    dateSubmitted?: number;
    /**
     * A bool that represents whether the Schema Response is the original one that was made when the registration was created.
     */
    isOriginalResponse?: boolean;
    /**
     * A bool that represents whether the Schema Response needs the current user to approve the state transition.
     */
    isPendingCurrentUserApproval?: boolean;
    /**
     * A string that represents Schema Response state. `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you must create a Schema Response Action that triggers a new submission.
     */
    reviewsState?: SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum;
    /**
     * A user provided string representing the reason a new Schema Response was needed.
     */
    revisionJustification?: string;
    /**
     * A dictionary object representing responses to to the revision where the key is the block key for that the response. For example in the registration response `{"q1": "Answer 1"}` the block key is `q1`..
     */
    revisionResponses?: Record<string, any>;
}
/**
 * URLs to alternative representations of the Schema Response entity.
 */
export declare class SchemaResponsePatchSchemaResponsesLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for a Schema Response.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the file entity.
 */
export declare class SchemaResponsePatchSchemaResponsesRelationships extends SpeakeasyBase {
    /**
     * A link to the Registration Schema Actions endpoint for this Schema Response.
     */
    actions?: string;
    /**
     * A link to the User who initiated the creation of the Schema Response.
     */
    initiatedBy?: string;
    /**
     * A link to the Registration for this Schema Response.
     */
    registration?: string;
    /**
     * A link to the Registration Schema for this Schema Response.
     */
    registrationSchema?: string;
}
export declare class SchemaResponsePatchSchemaResponsesInput extends SpeakeasyBase {
    /**
     * The properties of the Schema Response.
     */
    attributes: SchemaResponsePatchSchemaResponsesAttributesInput;
    /**
     * URLs to alternative representations of the Schema Response entity.
     */
    links?: SchemaResponsePatchSchemaResponsesLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the file entity.
     */
    relationships?: SchemaResponsePatchSchemaResponsesRelationships;
    /**
     * The type identifier of the Schema Response (`schema-response`).
     */
    type: string;
}
export declare class SchemaResponsePatchRequest extends SpeakeasyBase {
    requestBody: SchemaResponsePatchSchemaResponsesInput;
    /**
     * The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.
     */
    schemaResponseId: string;
}
/**
 * The properties of the Schema Response.
 */
export declare class SchemaResponsePatchSchemaResponsesAttributes extends SpeakeasyBase {
    /**
     * The date the Schema Response was created
     */
    dateCreated?: number;
    /**
     * The date the Schema Response was most recently changed.
     */
    dateModified?: number;
    /**
     * The date the Schema Response was submitted for approval.
     */
    dateSubmitted?: number;
    /**
     * A bool that represents whether the Schema Response is the original one that was made when the registration was created.
     */
    isOriginalResponse?: boolean;
    /**
     * A bool that represents whether the Schema Response needs the current user to approve the state transition.
     */
    isPendingCurrentUserApproval?: boolean;
    /**
     * A string that represents Schema Response state. `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you must create a Schema Response Action that triggers a new submission.
     */
    reviewsState?: SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum;
    /**
     * A user provided string representing the reason a new Schema Response was needed.
     */
    revisionJustification?: string;
    /**
     * A dictionary object representing responses to to the revision where the key is the block key for that the response. For example in the registration response `{"q1": "Answer 1"}` the block key is `q1`..
     */
    revisionResponses?: Record<string, any>;
    /**
     * A list of strings which the response keys for Registration Response Blocks that were updated from the previous schema.
     */
    updatedResponseKeys?: any[];
}
/**
 * OK
 */
export declare class SchemaResponsePatchSchemaResponses extends SpeakeasyBase {
    /**
     * The properties of the Schema Response.
     */
    attributes: SchemaResponsePatchSchemaResponsesAttributes;
    /**
     * The unique identifier of the Schema Response.
     */
    id?: string;
    /**
     * URLs to alternative representations of the Schema Response entity.
     */
    links?: SchemaResponsePatchSchemaResponsesLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the file entity.
     */
    relationships?: SchemaResponsePatchSchemaResponsesRelationships;
    /**
     * The type identifier of the Schema Response (`schema-response`).
     */
    type: string;
}
export declare class SchemaResponsePatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
