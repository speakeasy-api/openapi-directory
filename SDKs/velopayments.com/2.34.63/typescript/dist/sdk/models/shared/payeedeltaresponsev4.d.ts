import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeDeltaResponseV3Page } from "./payeedeltaresponsev3page";
import { PayeeDeltaResponseV4Links } from "./payeedeltaresponsev4links";
import { PayeeDeltaV4 } from "./payeedeltav4";
/**
 * List Payee Changes Response Object
 */
export declare class PayeeDeltaResponseV4 extends SpeakeasyBase {
    content?: PayeeDeltaV4[];
    links?: PayeeDeltaResponseV4Links[];
    page?: PayeeDeltaResponseV3Page;
}
