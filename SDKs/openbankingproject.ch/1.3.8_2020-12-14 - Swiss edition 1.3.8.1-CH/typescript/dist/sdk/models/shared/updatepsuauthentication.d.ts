import { SpeakeasyBase } from "../../../internal/utils";
import { PsuData } from "./psudata";
/**
 * Content of the body of a Update PSU authentication request
 *
 * @remarks
 *
 * Password subfield is used.
 *
 */
export declare class UpdatePsuAuthentication extends SpeakeasyBase {
    /**
     * PSU Data for Update PSU authentication.
     */
    psuData: PsuData;
}
