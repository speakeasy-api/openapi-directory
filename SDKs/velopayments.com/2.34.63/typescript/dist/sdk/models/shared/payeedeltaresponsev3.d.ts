import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeDeltaResponseV3Links } from "./payeedeltaresponsev3links";
import { PayeeDeltaResponseV3Page } from "./payeedeltaresponsev3page";
import { PayeeDeltaV3 } from "./payeedeltav3";
/**
 * List Payee Changes Response Object
 */
export declare class PayeeDeltaResponseV3 extends SpeakeasyBase {
    content?: PayeeDeltaV3[];
    links?: PayeeDeltaResponseV3Links[];
    page?: PayeeDeltaResponseV3Page;
}
