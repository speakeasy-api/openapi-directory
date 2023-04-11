import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The id of the domain to get information about.
     */
    domainId: string;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    domain?: shared.Domain;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
