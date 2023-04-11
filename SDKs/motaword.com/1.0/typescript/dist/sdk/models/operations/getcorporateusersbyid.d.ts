import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCorporateUsersByIdRequest extends SpeakeasyBase {
    /**
     * Corporate ID
     */
    corporateId: number;
}
export declare class GetCorporateUsersByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User list
     */
    userList?: shared.UserList;
}
