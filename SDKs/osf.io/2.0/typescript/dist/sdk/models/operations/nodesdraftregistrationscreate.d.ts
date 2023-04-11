import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesDraftRegistrationsCreateDraftRegistrationAttributesNodeLicense extends SpeakeasyBase {
    /**
     * A list of names of copyright holders for the license.
     */
    copyrightHolders?: string[];
    /**
     * The year the copyright was made.
     */
    year?: number;
}
/**
 * The properties of the Draft Registration entity.
 */
export declare class NodesDraftRegistrationsCreateDraftRegistrationAttributesInput extends SpeakeasyBase {
    /**
     * The category of the Draft Registration.
     */
    category?: string;
    /**
     * The description of the Draft Registration.
     */
    description?: string;
    nodeLicense?: NodesDraftRegistrationsCreateDraftRegistrationAttributesNodeLicense;
    /**
     * This is a legacy format for `registration_responses`.
     */
    registrationMetadata?: Record<string, any>;
    /**
     * A dictionary of question IDs and responses from the registration schema.
     */
    registrationResponses?: Record<string, any>;
    /**
     * The searchable tags of the Draft Registration.
     */
    tags?: string[];
    /**
     * The title of the Draft Registration.
     */
    title?: string;
}
export declare class NodesDraftRegistrationsCreateDraftRegistrationInput extends SpeakeasyBase {
    /**
     * The properties of the Draft Registration entity.
     */
    attributes: NodesDraftRegistrationsCreateDraftRegistrationAttributesInput;
}
export declare class NodesDraftRegistrationsCreateRequest extends SpeakeasyBase {
    requestBody: NodesDraftRegistrationsCreateDraftRegistrationInput;
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
export declare class NodesDraftRegistrationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
