import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualV3Name } from "./individualv3name";
export declare class IndividualV3Input extends SpeakeasyBase {
    name: IndividualV3Name;
}
export declare class IndividualV3 extends SpeakeasyBase {
    /**
     * If not authorized to view, value will be masked. Example: - XXXX-XX-XX
     */
    dateOfBirth: string;
    name: IndividualV3Name;
    /**
     * If not authorized to view, value will be masked. Example: XXXXX1234
     */
    nationalIdentification?: string;
}
