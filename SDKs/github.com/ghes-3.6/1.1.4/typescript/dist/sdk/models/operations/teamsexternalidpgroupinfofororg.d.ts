import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsExternalIdpGroupInfoForOrgRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group.
     */
    groupId: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class TeamsExternalIdpGroupInfoForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    externalGroup?: shared.ExternalGroup;
}
