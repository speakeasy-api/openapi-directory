import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCurrentUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * User data
     */
    currentUser?: shared.CurrentUser;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
