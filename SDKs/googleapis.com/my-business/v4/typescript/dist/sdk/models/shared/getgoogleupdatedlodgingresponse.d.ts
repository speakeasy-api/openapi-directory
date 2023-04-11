import { SpeakeasyBase } from "../../../internal/utils";
import { Lodging } from "./lodging";
/**
 * Response message for LodgingService.GetGoogleUpdatedLodging
 */
export declare class GetGoogleUpdatedLodgingResponse extends SpeakeasyBase {
    /**
     * Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified.
     */
    diffMask?: string;
    /**
     * Lodging of a location that provides accomodations.
     */
    lodging?: Lodging;
}
