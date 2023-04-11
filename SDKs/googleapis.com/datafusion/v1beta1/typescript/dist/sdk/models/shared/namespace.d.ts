import { SpeakeasyBase } from "../../../internal/utils";
import { IAMPolicy } from "./iampolicy";
/**
 * Represents the information of a namespace
 */
export declare class Namespace extends SpeakeasyBase {
    /**
     * IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.
     */
    iamPolicy?: IAMPolicy;
    /**
     * Name of the given namespace.
     */
    name?: string;
}
