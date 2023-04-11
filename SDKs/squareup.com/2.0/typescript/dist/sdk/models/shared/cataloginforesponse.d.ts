import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogInfoResponseLimits } from "./cataloginforesponselimits";
import { ErrorT } from "./error";
import { StandardUnitDescriptionGroup } from "./standardunitdescriptiongroup";
/**
 * Success
 */
export declare class CatalogInfoResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    limits?: CatalogInfoResponseLimits;
    /**
     * Group of standard measurement units.
     */
    standardUnitDescriptionGroup?: StandardUnitDescriptionGroup;
}
