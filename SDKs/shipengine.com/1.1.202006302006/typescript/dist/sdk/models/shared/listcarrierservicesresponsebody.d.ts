import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A service offered by the carrier
**/
export declare class ListCarrierServicesResponseBodyService extends SpeakeasyBase {
    carrierCode?: string;
    carrierId?: Record<string, any>;
    domestic?: boolean;
    international?: boolean;
    isMultiPackageSupported?: boolean;
    name?: string;
    serviceCode?: string;
}
/**
 * A carrier list services response body
**/
export declare class ListCarrierServicesResponseBody extends SpeakeasyBase {
    services?: ListCarrierServicesResponseBodyService[];
}
