import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectVendorsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetProjectVendorsRequest extends SpeakeasyBase {
    pathParams: GetProjectVendorsPathParams;
}
export declare class GetProjectVendorsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    userList?: shared.UserList;
}
