import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationListForUserRequest extends SpeakeasyBase {
    /**
     * The permission the user has against the returned organization
     */
    permission?: string;
}
export declare class GetActionOrganizationListForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
