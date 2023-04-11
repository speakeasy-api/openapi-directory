import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    /**
     * The unique id of the IP access control list to map to the SIP domain.
     */
    ipAccessControlListSid: string;
}
export declare class CreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP domain.
     */
    domainSid: string;
    requestBody?: CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest;
}
export declare class CreateSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipDomainSipIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
}
