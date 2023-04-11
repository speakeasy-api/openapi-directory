import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDomainCertV4ServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteDomainCertV4Security extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDomainCertV4Request extends SpeakeasyBase {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
}
export declare class DeleteDomainCertV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
