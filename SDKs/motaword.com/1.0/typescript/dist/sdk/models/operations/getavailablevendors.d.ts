import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAvailableVendorsWithEnum {
    User = "user"
}
export declare class GetAvailableVendorsRequest extends SpeakeasyBase {
    availableVendorsFilter?: shared.AvailableVendorsFilter;
    /**
     * Include detailed information. Possible values 'user'. Requesting user info enrichment takes much longer.
     */
    with?: GetAvailableVendorsWithEnum[];
}
export declare class GetAvailableVendorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User list
     */
    userList?: shared.UserList;
}
