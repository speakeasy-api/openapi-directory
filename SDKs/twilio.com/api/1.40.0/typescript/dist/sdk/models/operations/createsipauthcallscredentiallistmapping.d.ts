import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipAuthCallsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the CredentialList resource to map to the SIP domain.
     */
    credentialListSid: string;
}
export declare class CreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    /**
     * The SID of the SIP domain that will contain the new resource.
     */
    domainSid: string;
    requestBody?: CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;
}
export declare class CreateSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
}
