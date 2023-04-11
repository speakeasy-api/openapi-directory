import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LogsReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the log you wish to retrieve.
     */
    logId: string;
}
/**
 * The type of action performed on the OSF. See description for full list of possible actions.
 */
export declare class LogsReadLogAttributesLogParams extends SpeakeasyBase {
    /**
     * The addon associated with the connected node.
     */
    addon?: string;
    /**
     * The view only link added to the node was anonymous.
     */
    anonymousLink?: boolean;
    /**
     * The Amazon s3 bucket connected to the connected node.
     */
    bucket?: string;
    /**
     * Name of citation associated with the connected node.
     */
    citationName?: string;
    /**
     * List of contributors on the connected node involved in the action represented by this node log.
     */
    contributors?: string;
    /**
     * The dataset associated with the connected node.
     */
    dataSet?: string;
    /**
     * A dictionary with information about the destination for the move of the item on the node associated with this log. Details include the path, url, addon, node_url and node_title.
     */
    destination?: string;
    /**
     * Title of the fighshare project associated with this node log
     */
    figshareTitle?: string;
    /**
     * Dictionary with information about the file involved with the log.
     */
    file?: string;
    /**
     * Filename for the file associated with the log.
     */
    filename?: string;
    /**
     * Folder associated with the log.
     */
    folder?: string;
    /**
     * Name of the folder associated with the log.
     */
    folderName?: string;
    /**
     * URL that the connected node forwards to.
     */
    forwardUrl?: string;
    /**
     * The github repository involved with the action represented by this node log.
     */
    githubRepo?: string;
    /**
     * The github user involved with the action represented by this node log.
     */
    githubUser?: string;
    /**
     * Dictionary containing the DOI and ARK ID for a preprint associated with the log.
     */
    identifiers?: string;
    /**
     * Dictionary containing the ID and Name of the institution associated with the log.
     */
    institution?: string;
    /**
     * Kind of the object associated with the log.
     */
    kind?: string;
    /**
     * License for the associated node.
     */
    license?: string;
    /**
     * Old name of wiki page for a wiki rename log action.
     */
    oldPage?: string;
    /**
     * Current name of wiki page for rename log action.
     */
    page?: string;
    /**
     * Primary key of the wiki page associated with the log.
     */
    pageId?: string;
    /**
     * Node that is refered to in the params of the log.
     */
    paramsNode?: string;
    /**
     * Project that is refered to in the params of the log.
     */
    paramsProject?: string;
    /**
     * Path for a file associated with the log.
     */
    path?: string;
    /**
     * A dictionary with information about the node that is linked to the associated node.
     */
    pointer?: string;
    /**
     * Preprint related to the associated node.
     */
    preprint?: string;
    /**
     * Preprint provider for the associated node.
     */
    preprintProvider?: string;
    /**
     * If a primary institution for the associated node is changed, this will show the previous institution.
     */
    previousInstitution?: string;
    /**
     * A dictionary with information about the source of a move related event for a log. Details include the path, url, addon, node_url and node_title.
     */
    source?: string;
    /**
     * Dataverse study linked to the associated node.
     */
    study?: string;
    /**
     * Tag associated with the associated node.
     */
    tag?: string;
    /**
     * Tags associated with the associated node.
     */
    tags?: string;
    /**
     * A dictionary containing details about the target of the log. Details include the path, url, addon, node_url and node_title.
     */
    target?: string;
    /**
     * A dictionary containing information about the node that was used as a template for the associated node.
     */
    templateNode?: string;
    /**
     * The new title for the associated node.
     */
    titleNew?: string;
    /**
     * The original title for the associated node
     */
    titleOriginal?: string;
    /**
     * A dictionary containing all of the fields updated on the associated node.
     */
    updatedFields?: string;
    /**
     * Links to access information about the file associated with this log.
     */
    urls?: string;
    /**
     * Version of the wiki page associated with this log.
     */
    version?: string;
    /**
     * A dictionary with information about the wiki page associated with the log.
     */
    wiki?: string;
}
/**
 * The properties of the log.
 */
export declare class LogsReadLogAttributes extends SpeakeasyBase {
    /**
     * The type of action performed on the OSF. See actions section for full list of possible actions.
     */
    action: string;
    /**
     * The date and time at which the log was created, as an iso8601 formatted timestamp.
     */
    date: Date;
    /**
     * The type of action performed on the OSF. See description for full list of possible actions.
     */
    params?: LogsReadLogAttributesLogParams;
}
/**
 * URLs to alternative representations of the log entity.
 */
export declare class LogsReadLogLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the log.
     */
    self: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the log.
 */
export declare class LogsReadLogRelationships extends SpeakeasyBase {
    /**
     * A relationship to the node linked to this log.
     */
    linkedNode?: string;
    /**
     * A relationship to the node associated with this log.
     */
    node: string;
    /**
     * A relationship to the original node that was associated with this log, in case this log was copied from a node to a fork or registration.
     */
    originalNode?: string;
    /**
     * A relationship to the node used as a template for this log.
     */
    templateNode?: string;
    /**
     * A relationship to the user who performed the log action.
     */
    user?: string;
}
export declare class LogsReadLog extends SpeakeasyBase {
    /**
     * The properties of the log.
     */
    attributes: LogsReadLogAttributes;
    /**
     * The identifier of the log.
     */
    id: string;
    /**
     * URLs to alternative representations of the log entity.
     */
    links: LogsReadLogLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the log.
     */
    relationships: LogsReadLogRelationships;
    /**
     * The type identifier of the log (`logs`)
     */
    type: string;
}
export declare class LogsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
