import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * Advanced options that are specific to the carrier
**/
export declare class GetCarrierByIdResponseBodyCarrierAdvancedOption extends SpeakeasyBase {
    defaultValue?: string;
    description?: string;
    name?: string;
}
/**
 * A package type that a carrier supports for shipment.
**/
export declare class GetCarrierByIdResponseBodyPackageType extends SpeakeasyBase {
    description?: string;
    dimensions?: Dimensions;
    name: string;
    packageCode: string;
    packageId?: string;
}
/**
 * A service offered by the carrier
**/
export declare class GetCarrierByIdResponseBodyService extends SpeakeasyBase {
    carrierCode?: string;
    carrierId?: Record<string, any>;
    domestic?: boolean;
    international?: boolean;
    isMultiPackageSupported?: boolean;
    name?: string;
    serviceCode?: string;
}
/**
 * A carrier object that represents a provider such as UPS, USPS, DHL, etc
 * that has been tied to the current account.
 *
**/
export declare class GetCarrierByIdResponseBody extends SpeakeasyBase {
    accountNumber?: string;
    balance?: number;
    carrierCode?: string;
    carrierId?: Record<string, any>;
    friendlyName?: string;
    hasMultiPackageSupportingServices?: boolean;
    nickname?: string;
    options?: GetCarrierByIdResponseBodyCarrierAdvancedOption[];
    packages?: GetCarrierByIdResponseBodyPackageType[];
    primary?: boolean;
    requiresFundedAmount?: boolean;
    services?: GetCarrierByIdResponseBodyService[];
    supportsLabelMessages?: boolean;
}
