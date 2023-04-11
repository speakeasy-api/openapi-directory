import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAccountCredentialSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAccountCredentialRequest extends SpeakeasyBase {
    /**
     * UUID of the credential to delete
     */
    credentialId: string;
}
export declare class RemoveAccountCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
