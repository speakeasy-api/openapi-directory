import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCmsV3DomainsDomainIdGetByIdSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2?: string;
    oauth2Legacy?: string;
    oauth2Legacy1?: string;
    oauth3?: string;
    privateApps?: string;
    privateApps1?: string;
    privateAppsLegacy?: string;
    privateAppsLegacy1?: string;
}
export declare class GetCmsV3DomainsDomainIdGetByIdRequest extends SpeakeasyBase {
    /**
     * The unique ID of the domain.
     */
    domainId: string;
}
export declare class GetCmsV3DomainsDomainIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    domain?: shared.Domain;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
