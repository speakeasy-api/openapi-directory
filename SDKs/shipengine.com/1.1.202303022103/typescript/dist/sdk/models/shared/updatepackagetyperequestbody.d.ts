import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * A package type that a carrier supports for shipment.
 */
export declare class UpdatePackageTypeRequestBody extends SpeakeasyBase {
    /**
     * Provides a helpful description for the custom package.
     */
    description?: string;
    /**
     * The custom dimensions for the package.
     */
    dimensions?: Dimensions;
    name: string;
    packageCode: string;
    /**
     * A string that uniquely identifies the package.
     */
    packageId?: string;
}
