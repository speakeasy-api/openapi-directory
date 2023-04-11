import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the preprint entity.
 */
export declare class PreprintsCreatePreprintAttributesInput extends SpeakeasyBase {
    /**
     * The DOI of the associated journal article, as entered by the user, if the preprint is published.
     */
    doi?: string;
    /**
     * The metadata (copyright year and holder) associated with a license, required for certain licenses.
     */
    licenseRecord?: string;
    /**
     * A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
     */
    subjects?: string[];
}
/**
 * URLs to other entities or entity collections that have a relationship to the preprint entity.
 */
export declare class PreprintsCreatePreprintRelationshipsInput extends SpeakeasyBase {
    /**
     * A relationship to the bibliographic contributors that are listed as contributing to this preprint.
     */
    bibliographicContributors?: string;
    /**
     * A relationship to the license that has been applied to the preprint.
     */
    license?: string;
    /**
     * A relationship to the node that was created for the preprint, or from which the preprint was created.
     */
    node: string;
    /**
     * A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
     */
    primaryFile: string;
    /**
     * A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
     */
    provider: string;
}
export declare class PreprintsCreatePreprintInput extends SpeakeasyBase {
    /**
     * The properties of the preprint entity.
     */
    attributes?: PreprintsCreatePreprintAttributesInput;
    /**
     * URLs to other entities or entity collections that have a relationship to the preprint entity.
     */
    relationships: PreprintsCreatePreprintRelationshipsInput;
    /**
     * The type identifier of the preprint entity (`preprints`).
     */
    type: string;
}
export declare class PreprintsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
