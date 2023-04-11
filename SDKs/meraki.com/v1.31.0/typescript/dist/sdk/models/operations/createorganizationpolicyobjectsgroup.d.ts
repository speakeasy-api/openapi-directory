import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationPolicyObjectsGroupRequestBody extends SpeakeasyBase {
    /**
     * Category of a policy object group (one of: NetworkObjectGroup, GeoLocationGroup, PortObjectGroup, ApplicationGroup)
     */
    category?: string;
    /**
     * A name for the group of network addresses, unique within the organization (alphanumeric, space, dash, or underscore characters only)
     */
    name: string;
    /**
     * A list of Policy Object ID's that this NetworkObjectGroup should be associated to (note: these ID's will replace the existing associated Policy Objects)
     */
    objectIds?: number[];
}
export declare class CreateOrganizationPolicyObjectsGroupRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationPolicyObjectsGroupRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationPolicyObjectsGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationPolicyObjectsGroup201ApplicationJSONObject?: Record<string, any>;
}
