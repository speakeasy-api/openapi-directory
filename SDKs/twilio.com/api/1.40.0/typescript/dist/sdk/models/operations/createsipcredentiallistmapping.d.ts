import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipCredentialListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipCredentialListMappingCreateSipCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies the CredentialList resource to map to the SIP domain.
     */
    credentialListSid: string;
}
export declare class CreateSipCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP Domain for which the CredentialList resource will be mapped.
     */
    domainSid: string;
    requestBody?: CreateSipCredentialListMappingCreateSipCredentialListMappingRequest;
}
export declare class CreateSipCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipDomainSipCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping;
}
