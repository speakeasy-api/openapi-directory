import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HostReputationRequest extends SpeakeasyBase {
    /**
     * An IP address, domain name, FQDN or URL. <br>If you supply a domain/URL it will be checked against the URI DNSBL lists
     */
    host: string;
    /**
     * Only check lists with this rating or better
     */
    listRating?: number;
    /**
     * Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values
     */
    zones?: string;
}
export declare class HostReputationResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    hostReputationResponse?: shared.HostReputationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
