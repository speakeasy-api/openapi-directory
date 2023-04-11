import { Addons } from "./addons";
import { Base } from "./base";
import { Citations } from "./citations";
import { Collections } from "./collections";
import { Comments } from "./comments";
import { DraftRegistrations } from "./draftregistrations";
import { Files } from "./files";
import { Institutions } from "./institutions";
import { Licenses } from "./licenses";
import { Logs } from "./logs";
import { Nodes } from "./nodes";
import { PreprintProviders } from "./preprintproviders";
import { Preprints } from "./preprints";
import { Registrations } from "./registrations";
import { RegistrationSchemaBlocks } from "./registrationschemablocks";
import { RegistrationSchemas } from "./registrationschemas";
import { SchemaResponseActions } from "./schemaresponseactions";
import { SchemaResponses } from "./schemaresponses";
import { Taxonomies } from "./taxonomies";
import { Users } from "./users";
import { ViewOnlyLinks } from "./viewonlylinks";
import { Wikis } from "./wikis";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.test.osf.io/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    /**
     * Addons represent a user connection to an external service, some addons allow for additional storage, some modify user authentication or add a redirect link to a project.
     */
    addons: Addons;
    /**
     * This is the "home page" of the API you can get important autentication information for the user making the request and get links to other resources.
     */
    base: Base;
    citations: Citations;
    collections: Collections;
    comments: Comments;
    /**
     *
     * @remarks
     * A Draft Registration is a object that allows a user to edit and revise a registration before it is registered. Draft Registrations allow contributors to coordinate on a single registration, so they can upload files and change Registration metadata before the Registration is archived.
     */
    draftRegistrations: DraftRegistrations;
    files: Files;
    institutions: Institutions;
    licenses: Licenses;
    logs: Logs;
    nodes: Nodes;
    preprintProviders: PreprintProviders;
    preprints: Preprints;
    /**
     * Registration Schema Blocks are read-only entities, they represent question prompts and form inputs known as "blocks" that make up a Registration Schemas. Each block has a designated `block_type` that determines what type of information that Schema Block's corresponding block in the Schema Response.
     */
    registrationSchemaBlocks: RegistrationSchemaBlocks;
    /**
     * A Registration Schemas defines the range of valid responses to a registration. Each Registration Schema is composed of <a href="#tag/Registration-Schema-Blocks">"blocks"</a> that define the individual questions a user responds to. Registration Schemas are created by the Center for Open Science or an affiliated institution and periodically migrated into the system. Registration Schemas are updated and deactivated using an internal versioning system.
     */
    registrationSchemas: RegistrationSchemas;
    registrations: Registrations;
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
    schemaResponseActions: SchemaResponseActions;
    /**
     * Schema Responses contain user supplied responses to a Registration Schema. A Schema Response aggregates all of the the responses for a given version of a Registration's Registration Schema. Schema Responses are created when a Registration is completed. Once a Registration is completed the Schema Responses for a Registration can be revisied and updated by using it's associated action endpoints.
     *
     * @remarks
     *
     * There are a few states for Schema Responses:
     *
     *   - `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you
     *   must create a Schema Response Action that triggers a new submission.
     *
     *   - `in_progess` is the state of a Schema Response where the response is editable and still private, Schema
     *   Responses are editted via a PATCH request as specified below.
     *
     *   - `unapproved` is the state of a Schema Response where edits have been made and "locked-in", now contributors
     *   have the ability to reject the changes, however if they are not rejected changes are automatically approved
     *   after 48 hours. If `unapproved` Schema Responses are rejected, they are returned to the `in_progress` state. If
     *   `unapproved` Schema Responses are approved they either enter an `approved` state or go into a
     *   `pending_moderation` to be accepted or denied by a moderator.
     *
     *   - `pending_moderation` is the state of a Schema Response where moderators have an opportunity to reject or
     *   approve a Schema Response that has been approved by it's contributors. This state is only reachable for Schema
     *   Responses that are associated with a Registration that has Registration Provider a moderated workflow.
     *
     *   - `approved` is the state of a Schema Response where it is public and immutable, in order to update an approved
     *   Schema Response a new one must be created.
     */
    schemaResponses: SchemaResponses;
    taxonomies: Taxonomies;
    users: Users;
    viewOnlyLinks: ViewOnlyLinks;
    wikis: Wikis;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
