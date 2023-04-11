import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The permission level of the contributor. The default value is 'write'.
 */
export declare enum NodesContributorsPartialUpdateContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
 */
export declare class NodesContributorsPartialUpdateContributorAttributesInput extends SpeakeasyBase {
    /**
     * Whether or not the contributor will be included in citations for the node. The default value is true.
     */
    bibliographic?: boolean;
    /**
     * The position of this contributor in the list of project contributors and in project citations.
     */
    index?: number;
    /**
     * The permission level of the contributor. The default value is 'write'.
     */
    permission?: NodesContributorsPartialUpdateContributorAttributesPermissionEnum;
}
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
 */
export declare class NodesContributorsPartialUpdateContributorRelationshipsInput extends SpeakeasyBase {
    /**
     * A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
     */
    user: string;
}
export declare class NodesContributorsPartialUpdateContributorInput extends SpeakeasyBase {
    /**
     * The properties of the contributor entity.
     */
    attributes?: NodesContributorsPartialUpdateContributorAttributesInput;
    /**
     * URLs to other entities or entity collections that have a relationship to the contributor entity.
     */
    relationships: NodesContributorsPartialUpdateContributorRelationshipsInput;
}
export declare class NodesContributorsPartialUpdateRequest extends SpeakeasyBase {
    requestBody: NodesContributorsPartialUpdateContributorInput;
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
export declare class NodesContributorsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
