import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
/**
 * Successful response
 */
export declare class ReturnpolicyListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyListResponse`".
     */
    kind?: string;
    resources?: ReturnPolicy[];
}
