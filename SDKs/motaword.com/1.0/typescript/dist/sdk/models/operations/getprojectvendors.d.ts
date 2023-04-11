import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectVendorsRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetProjectVendorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotLaunchedYet
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User list
     */
    userList?: shared.UserList;
}
