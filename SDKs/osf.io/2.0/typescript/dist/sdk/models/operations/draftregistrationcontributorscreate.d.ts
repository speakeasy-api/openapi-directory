import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The permission level of the contributor. The default value is 'write'.
 */
export declare enum DraftRegistrationContributorsCreateContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
 */
export declare class DraftRegistrationContributorsCreateContributorAttributesInput extends SpeakeasyBase {
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
    permission?: DraftRegistrationContributorsCreateContributorAttributesPermissionEnum;
}
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
 */
export declare class DraftRegistrationContributorsCreateContributorRelationshipsInput extends SpeakeasyBase {
    /**
     * A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
     */
    user: string;
}
export declare class DraftRegistrationContributorsCreateContributorInput extends SpeakeasyBase {
    /**
     * The properties of the contributor entity.
     */
    attributes?: DraftRegistrationContributorsCreateContributorAttributesInput;
    /**
     * URLs to other entities or entity collections that have a relationship to the contributor entity.
     */
    relationships: DraftRegistrationContributorsCreateContributorRelationshipsInput;
}
export declare class DraftRegistrationContributorsCreateRequest extends SpeakeasyBase {
    requestBody: DraftRegistrationContributorsCreateContributorInput;
    /**
     * The unique identifier of the Draft Registration.
     */
    draftId: string;
}
export declare class DraftRegistrationContributorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
