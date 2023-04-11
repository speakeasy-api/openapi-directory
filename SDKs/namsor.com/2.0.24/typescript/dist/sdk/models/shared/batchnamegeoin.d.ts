import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { NameGeoIn } from "./namegeoin";
/**
 * A list of proper names
 */
export declare class BatchNameGeoIn extends SpeakeasyBase {
    facts?: FactIn[];
    properNouns?: NameGeoIn[];
}
