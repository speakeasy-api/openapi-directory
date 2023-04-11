import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { Nearby } from "./nearby";
/**
 * Success
 */
export declare class NearbyResponse extends SpeakeasyBase {
    data: Nearby[];
    /**
     * JSON API-compliant object containing metadata about this response
     */
    meta?: Meta;
}
