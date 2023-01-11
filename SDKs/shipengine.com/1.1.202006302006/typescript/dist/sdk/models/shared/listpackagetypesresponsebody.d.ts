import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * A package type that a carrier supports for shipment.
**/
export declare class ListPackageTypesResponseBodyPackageType extends SpeakeasyBase {
    description?: string;
    dimensions?: Dimensions;
    name: string;
    packageCode: string;
    packageId?: string;
}
/**
 * A list package types response body
**/
export declare class ListPackageTypesResponseBody extends SpeakeasyBase {
    packages?: ListPackageTypesResponseBodyPackageType[];
}
