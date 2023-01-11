import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAvailableVendorsWithEnum {
    User = "user"
}
export declare class GetAvailableVendorsQueryParams extends SpeakeasyBase {
    with?: GetAvailableVendorsWithEnum[];
}
export declare class GetAvailableVendorsRequest extends SpeakeasyBase {
    queryParams: GetAvailableVendorsQueryParams;
    request?: shared.AvailableVendorsFilter;
}
export declare class GetAvailableVendorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userList?: shared.UserList;
}
