import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAccountCredentialSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateAccountCredentialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * credential details
     */
    credential?: shared.Credential;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
