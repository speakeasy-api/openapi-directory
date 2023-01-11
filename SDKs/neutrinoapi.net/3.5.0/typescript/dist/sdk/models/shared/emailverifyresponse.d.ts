import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailVerifyResponse extends SpeakeasyBase {
    domain: string;
    domainError: boolean;
    email: string;
    isCatchAll: boolean;
    isDeferred: boolean;
    isDisposable: boolean;
    isFreemail: boolean;
    isPersonal: boolean;
    provider: string;
    smtpResponse: string;
    smtpStatus: string;
    syntaxError: boolean;
    typosFixed: boolean;
    valid: boolean;
    verified: boolean;
}
