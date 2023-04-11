import { SpeakeasyBase } from "../../../internal/utils";
import { CreateIndividualV3Name } from "./createindividualv3name";
export declare class CreateIndividualV4 extends SpeakeasyBase {
    /**
     * Must not be date in future. Example - 1970-05-20
     */
    dateOfBirth: Date;
    name: CreateIndividualV3Name;
    nationalIdentification?: string;
}
