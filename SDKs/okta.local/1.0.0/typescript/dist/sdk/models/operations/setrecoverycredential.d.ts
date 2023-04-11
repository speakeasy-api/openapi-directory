import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion extends SpeakeasyBase {
    answer?: string;
    question?: string;
}
export declare class SetRecoveryCredentialRequestBodyCredentials extends SpeakeasyBase {
    recoveryQuestion?: SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion;
}
export declare class SetRecoveryCredentialRequestBody extends SpeakeasyBase {
    credentials?: SetRecoveryCredentialRequestBodyCredentials;
}
export declare class SetRecoveryCredentialRequest extends SpeakeasyBase {
    requestBody?: SetRecoveryCredentialRequestBody;
    userId: string;
}
export declare class SetRecoveryCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
