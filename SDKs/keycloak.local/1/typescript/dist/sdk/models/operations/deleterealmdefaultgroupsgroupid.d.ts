import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmDefaultGroupsGroupIdRequest extends SpeakeasyBase {
    groupId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class DeleteRealmDefaultGroupsGroupIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
