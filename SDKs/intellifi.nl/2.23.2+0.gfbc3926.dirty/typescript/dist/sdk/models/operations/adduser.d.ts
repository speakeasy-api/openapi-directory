import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddUserSecurity extends SpeakeasyBase {
    cookieSid: string;
}
export declare class AddUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the newly added resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
