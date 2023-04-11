import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprintsReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the preprint.
     */
    preprintId: string;
}
/**
 * The properties of the preprint entity.
 */
export declare class PreprintsReadPreprintAttributes extends SpeakeasyBase {
    /**
     * The time at which the preprint was created, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * The time at which the preprint was last modified, as an iso8601 formatted timestamp.
     */
    dateModified?: Date;
    /**
     * The time at which the preprint was published, as an iso8601 formatted timestamp.
     */
    datePublished?: Date;
    /**
     * The DOI of the associated journal article, as entered by the user, if the preprint is published.
     */
    doi?: string;
    /**
     * Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
     */
    isPreprintOrphan?: boolean;
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
 * URLs to alternative representations of the preprint entity.
 */
export declare class PreprintsReadPreprintLinks extends SpeakeasyBase {
    /**
     * The URL representation of the DOI entered by the user for the preprint manuscript.
     */
    doi?: string;
    /**
     * A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
     */
    html?: string;
    /**
     * The URL representation of the OSF assigned DOI for the preprint.
     */
    preprintDoi?: string;
    /**
     * A link to the detail page for the preprint.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the preprint entity.
 */
export declare class PreprintsReadPreprintRelationships extends SpeakeasyBase {
    /**
     * A relationship to the bibliographic contributors that are listed as contributing to this preprint.
     */
    bibliographicContributors?: string;
    /**
     * A relationship to the citation of the preprint.
     */
    citation?: string;
    /**
     * A relationship to the identifiers associated with the preprint.
     */
    identifiers?: string;
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
/**
 * OK
 */
export declare class PreprintsReadPreprint extends SpeakeasyBase {
    /**
     * The properties of the preprint entity.
     */
    attributes?: PreprintsReadPreprintAttributes;
    /**
     * The identifier of the preprint entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the preprint entity.
     */
    links?: PreprintsReadPreprintLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the preprint entity.
     */
    relationships: PreprintsReadPreprintRelationships;
    /**
     * The type identifier of the preprint entity (`preprints`).
     */
    type: string;
}
export declare class PreprintsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
