import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipAuthRegistrationsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the CredentialList resource to map to the SIP domain.
     */
    credentialListSid: string;
}
export declare class CreateSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    /**
     * The SID of the SIP domain that will contain the new resource.
     */
    domainSid: string;
    requestBody?: CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest;
}
export declare class CreateSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping;
}
