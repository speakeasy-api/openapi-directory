import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * A package type that a carrier supports for shipment.
**/
export declare class ListCarrierPackageTypesResponseBodyPackageType extends SpeakeasyBase {
    description?: string;
    dimensions?: Dimensions;
    name: string;
    packageCode: string;
    packageId?: string;
}
/**
 * A list carrier package types response body
**/
export declare class ListCarrierPackageTypesResponseBody extends SpeakeasyBase {
    packages?: ListCarrierPackageTypesResponseBodyPackageType[];
}
