import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JoinGroupsRequestBody extends SpeakeasyBase {
    /**
     * A comma separated list of the IDs of the groups to join.
     */
    groupIds: string;
}
/**
 * The groups with updated membership data.
 */
export declare class JoinGroups200ApplicationJSON extends SpeakeasyBase {
    /**
     * Updated data about the groups and the current users' membership to each group.
     */
    groups?: shared.Group[];
    /**
     * When this is true, it means that some of the membership requests weren't processed in order to keep the user from going over the 12 group limit (the membership field of the groups can be used to determine which requests were processed).
     *
     * @remarks
     *
     */
    overGroupLimit?: boolean;
}
export declare class JoinGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The groups with updated membership data.
     */
    joinGroups200ApplicationJSONObject?: JoinGroups200ApplicationJSON;
}
