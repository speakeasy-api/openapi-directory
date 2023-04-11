import { SpeakeasyBase } from "../../../internal/utils";
import { NAMain } from "./namain";
import { NAUser } from "./nauser";
export declare class NAStationDataBody extends SpeakeasyBase {
    devices?: NAMain[];
    user?: NAUser;
}
