import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountCredentialSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountCredentialRequest extends SpeakeasyBase {
    /**
     * UUID of the credential to retrieve
     */
    credentialId: string;
}
export declare class GetAccountCredentialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * credential details
     */
    credential?: shared.Credential;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
