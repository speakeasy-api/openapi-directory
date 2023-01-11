import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
export declare class GeocodeAddressResponse extends SpeakeasyBase {
    found: number;
    locations: Location[];
}
