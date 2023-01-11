import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailValidateResponse extends SpeakeasyBase {
    domain: string;
    domainError: boolean;
    email: string;
    isDisposable: boolean;
    isFreemail: boolean;
    isPersonal: boolean;
    provider: string;
    syntaxError: boolean;
    typosFixed: boolean;
    valid: boolean;
}
