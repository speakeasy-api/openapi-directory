import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDomainDomainnameRequest extends SpeakeasyBase {
    /**
     * The domain ID integrated in the `sub` property.
     */
    domainname: string;
}
/**
 * OK
 */
export declare class GetDomainDomainname200ApplicationJSON extends SpeakeasyBase {
    /**
     * The URL of the domain's JSON representation.
     */
    atId?: string;
    /**
     * The URL of the domain logo. The image from this address is displayed on the webpage of the domain.
     */
    logo?: string;
    /**
     * The tenants included in a domain.
     */
    members?: any[];
    /**
     * The displayed domain name.
     */
    name?: string;
    /**
     * The URL of the domain's webpage.
     */
    profile?: string;
    /**
     * The fully qualified DNS name of the domain (e.g. phantauth.net).
     */
    sub?: string;
}
export declare class GetDomainDomainnameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getDomainDomainname200ApplicationJSONObject?: GetDomainDomainname200ApplicationJSON;
}
