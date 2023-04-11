import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMobileAuthorizationCodeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateMobileAuthorizationCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMobileAuthorizationCodeResponse?: shared.CreateMobileAuthorizationCodeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
