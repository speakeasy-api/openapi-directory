import { SpeakeasyBase } from "../../../internal/utils";
import { IcNode } from "./icnode";
export declare class PairwiseMatch extends SpeakeasyBase {
    /**
     * lowest common subsumer
     */
    lcs?: IcNode;
    /**
     * match id
     */
    match?: IcNode;
    /**
     * reference id
     */
    reference?: IcNode;
}
