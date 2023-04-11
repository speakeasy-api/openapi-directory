import { SpeakeasyBase } from "../../../internal/utils";
import { FactIn } from "./factin";
import { PersonalNameGeoSubdivisionIn } from "./personalnamegeosubdivisionin";
/**
 * A list of personal names
 */
export declare class BatchPersonalNameGeoSubdivisionIn extends SpeakeasyBase {
    facts?: FactIn[];
    personalNames?: PersonalNameGeoSubdivisionIn[];
}
