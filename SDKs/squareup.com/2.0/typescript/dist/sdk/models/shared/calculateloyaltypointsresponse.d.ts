import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A response that includes the points that the buyer can earn from
 *
 * @remarks
 * a specified purchase.
 */
export declare class CalculateLoyaltyPointsResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The points that the buyer can earn from a specified purchase.
     */
    points?: number;
}
