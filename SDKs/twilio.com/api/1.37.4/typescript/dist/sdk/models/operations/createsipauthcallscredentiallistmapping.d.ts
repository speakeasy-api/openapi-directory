import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipAuthCallsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    credentialListSid: string;
}
export declare class CreateSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: CreateSipAuthCallsCredentialListMappingPathParams;
    request?: CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;
    security: CreateSipAuthCallsCredentialListMappingSecurity;
}
export declare class CreateSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
}
