import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetEmailNotBouncingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The updated user.
     */
    currentUser?: shared.CurrentUser;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
