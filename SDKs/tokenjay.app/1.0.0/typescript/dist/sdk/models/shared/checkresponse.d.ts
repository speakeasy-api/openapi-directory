import { SpeakeasyBase } from "../../../internal/utils";
import { GenuineToken } from "./genuinetoken";
/**
 * OK
 */
export declare class CheckResponse extends SpeakeasyBase {
    /**
     * Flag with 0 unknown, 1 verified, 2 suspicious, 3 blocked (see EIP-21)
     */
    genuine: number;
    token?: GenuineToken;
}
