import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCurrentUserGroupsRequest extends SpeakeasyBase {
    /**
     * Set the membership parameter to only return certain groups. The options are: <br /><br /> - **subscribed**: Only return groups the user is a member of.<br /> - **pending-questions**: Only return groups where the user needs to respond to a new member questionnaire.<br /> - **pending**: Only return groups where the user is waiting for their membership request to be approved (excludes groups which are pending-questions). <br /><br /> If unset, all groups the user is a member of and pending membership on will be returned.
     *
     * @remarks
     *
     */
    membership?: string;
}
export declare class GetCurrentUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The users groups.
     */
    groups?: shared.Group[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
