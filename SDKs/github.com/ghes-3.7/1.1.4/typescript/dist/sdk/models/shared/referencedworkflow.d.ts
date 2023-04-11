import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A workflow referenced/reused by the initial caller workflow
 */
export declare class ReferencedWorkflow extends SpeakeasyBase {
    path: string;
    ref?: string;
    sha: string;
}
