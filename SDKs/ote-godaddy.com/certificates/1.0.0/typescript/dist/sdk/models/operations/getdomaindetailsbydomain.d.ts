import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainDetailsByDomainPathParams extends SpeakeasyBase {
    certificateId: string;
    customerId: string;
    domain: string;
}
export declare class GetDomainDetailsByDomainRequest extends SpeakeasyBase {
    pathParams: GetDomainDetailsByDomainPathParams;
}
export declare class GetDomainDetailsByDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    domainVerificationDetail?: shared.DomainVerificationDetail;
    statusCode: number;
}
