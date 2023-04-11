import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRealmUsersIdGroupsGroupIdRequest extends SpeakeasyBase {
    groupId: string;
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmUsersIdGroupsGroupIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
