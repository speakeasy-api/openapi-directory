import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The permission level of the contributor. The default value is 'write'.
 */
export declare enum PreprintsContributorsCreateContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The properties of the contributor entity.
 */
export declare class PreprintsContributorsCreateContributorAttributesInput extends SpeakeasyBase {
    /**
     * Whether or not the contributor will be included in citations for the Preprint. The default value is true.
     */
    bibliographic?: boolean;
    /**
     * The position of this contributor in the list of Preprint's contributors and in a Preprint's citations.
     */
    index?: number;
    /**
     * The permission level of the contributor. The default value is 'write'.
     */
    permission?: PreprintsContributorsCreateContributorAttributesPermissionEnum;
}
export declare class PreprintsContributorsCreateContributorInput extends SpeakeasyBase {
    /**
     * The properties of the contributor entity.
     */
    attributes?: PreprintsContributorsCreateContributorAttributesInput;
}
export declare class PreprintsContributorsCreateRequest extends SpeakeasyBase {
    requestBody: PreprintsContributorsCreateContributorInput;
    /**
     * The unique identifier of the Preprint.
     */
    preprintId: string;
}
export declare class PreprintsContributorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
