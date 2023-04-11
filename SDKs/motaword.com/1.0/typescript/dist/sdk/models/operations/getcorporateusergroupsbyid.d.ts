import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCorporateUserGroupsByIdRequest extends SpeakeasyBase {
    /**
     * Corporate ID
     */
    corporateId: number;
}
export declare class GetCorporateUserGroupsByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User group list
     */
    userGroupList?: shared.UserGroupList;
}
