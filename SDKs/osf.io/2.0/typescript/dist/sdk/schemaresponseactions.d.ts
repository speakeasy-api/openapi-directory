import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Schema Response Actions are objects that when created cause state transitions for Schema Responses. Users use state transitions to submit, approve, and revise new Schema Responses.
 *
 * @remarks
 *
 * Schema Response Actions have a  few different triggers to cause state transitions:
 *
 *   - `submit` is a trigger to transition a Schema Response from an `in_progress` state to an `unapproved` state,
 *   this freezes edits for the Schema Response and allows all admin contributors to the Schema Response's
 *   Registration to either approved or reject the Schema Response.
 *
 *   - `approve` is a trigger to transition a Schema Response from an `unapproved` state to an `approved` state, this
 *   makes the Schema Response changes public completing the update of the Schema Response. On Schema Responses that
 *   are associated with a Registration that has Registration Provider a moderated workflow the `approve` trigger
 *   will transition the Schema Response to `pending_moderation`.
 *
 *   - `accept` is a trigger to transition a Schema Response from an `pending_moderation` state to an `approved`
 *   state. This trigger is only valid for Schema Responses that are associated with a Registration that has
 *   Registration Provider a moderated workflow and only possible for a user designated as moderator of a
 *   Registration Provider.
 *
 *   - `admin_reject` is a trigger to transition a Schema Response from an `unapproved` state to an
 *   `in_progress`  state. This trigger allows users to reject purposed changes to a Schema Response.
 *
 *   - `moderator_reject` is a trigger to transition a Schema Response from an `pending_moderation` state to an
 *   `in_progress`  state. This trigger is only valid for Schema Responses that are associated with a Registration
 *   that has Registration Provider a moderated workflow and only possible for a user designated as moderator of a
 *   Registration Provider.
 */
export declare class SchemaResponseActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * A Schema Response Action from a Schema Response
     *
     * @remarks
     * Retrieves a Schema Response Action by it's ID.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested Schema Response Actions, if the request is successful.
     * #### Errors
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId(req: operations.GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdResponse>;
    /**
     * Create a new Schema Response Action
     *
     * @remarks
     * This creates a new Schema Response Action in order to trigger a state transition for a Schema Response.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested Schema Response Actions, if the request is successful.
     * #### Errors
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    postSchemaResponsesSchemaResponseIdActions(req: operations.PostSchemaResponsesSchemaResponseIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostSchemaResponsesSchemaResponseIdActionsResponse>;
    /**
     * Retrieve a list of Schema Response Actions for a Schema Response
     *
     * @remarks
     * This retrieves a paginated list of all Schema Response Actions created for a Schema Response.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested Schema Response Actions, if the request is successful.
     * #### Errors
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    schemaResponseActionRead(req: operations.SchemaResponseActionReadRequest, config?: AxiosRequestConfig): Promise<operations.SchemaResponseActionReadResponse>;
}
