import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesDraftRegistrationsSubjectsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the draft registration.
     */
    draftId: string;
}
/**
 * The attributes of the Subject.
 */
export declare class NodesDraftRegistrationsSubjectsSubjectAttributes extends SpeakeasyBase {
    /**
     * The name for the taxonomy used to name subjects (`bepress`)
     */
    taxonomyName?: string;
    /**
     * The name for the subject (`Arts and Humanities`)
     */
    text?: string;
}
/**
 * The attributes of the Subject.
 */
export declare class NodesDraftRegistrationsSubjectsSubjectEmbedsParentDataAttributes extends SpeakeasyBase {
    /**
     * The name for the taxonmy used to name subjects (`bepress`)
     */
    taxonomyName?: string;
    /**
     * The name for the subject (`Arts and Humanities`)
     */
    text?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the file entity.
 */
export declare class NodesDraftRegistrationsSubjectsSubjectEmbedsParentDataRelationships extends SpeakeasyBase {
    /**
     * A link to the children for this Subject.
     */
    children?: string;
    /**
     * A link to the parent for this Subject.
     */
    parent?: string;
}
export declare class NodesDraftRegistrationsSubjectsSubjectEmbedsParentData extends SpeakeasyBase {
    /**
     * The attributes of the Subject.
     */
    attributes?: NodesDraftRegistrationsSubjectsSubjectEmbedsParentDataAttributes;
    /**
     * A JSON object containing the embedded information.
     */
    data?: Record<string, any>;
    /**
     * The unique identifier of the Subject.
     */
    id?: string;
    /**
     * Links to other entities or entity collections that have a relationship to the file entity.
     */
    relationships?: NodesDraftRegistrationsSubjectsSubjectEmbedsParentDataRelationships;
    /**
     * The type identifier of the Subject (`subject`).
     */
    type?: string;
}
/**
 * The parent of the Subject.
 */
export declare class NodesDraftRegistrationsSubjectsSubjectEmbedsParent extends SpeakeasyBase {
    data?: NodesDraftRegistrationsSubjectsSubjectEmbedsParentData;
}
/**
 * The parent is always embedded in the Subject response.
 */
export declare class NodesDraftRegistrationsSubjectsSubjectEmbeds extends SpeakeasyBase {
    /**
     * The parent of the Subject.
     */
    parent?: NodesDraftRegistrationsSubjectsSubjectEmbedsParent;
}
/**
 * URLs to alternative representations of the Subject entity.
 */
export declare class NodesDraftRegistrationsSubjectsSubjectLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for a Subject.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the file entity.
 */
export declare class NodesDraftRegistrationsSubjectsSubjectRelationships extends SpeakeasyBase {
    /**
     * A link to the children for this Subject.
     */
    children?: string;
    /**
     * A link to the parent for this Subject.
     */
    parent?: string;
}
/**
 * OK
 */
export declare class NodesDraftRegistrationsSubjectsSubject extends SpeakeasyBase {
    /**
     * The attributes of the Subject.
     */
    attributes?: NodesDraftRegistrationsSubjectsSubjectAttributes;
    /**
     * The parent is always embedded in the Subject response.
     */
    embeds?: NodesDraftRegistrationsSubjectsSubjectEmbeds;
    /**
     * The unique identifier of the Subject.
     */
    id?: string;
    /**
     * URLs to alternative representations of the Subject entity.
     */
    links?: NodesDraftRegistrationsSubjectsSubjectLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the file entity.
     */
    relationships?: NodesDraftRegistrationsSubjectsSubjectRelationships;
    /**
     * The type identifier of the Subject (`subject`).
     */
    type?: string;
}
export declare class NodesDraftRegistrationsSubjectsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
