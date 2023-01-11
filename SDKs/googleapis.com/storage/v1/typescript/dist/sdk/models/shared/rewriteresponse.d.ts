import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectT } from "./object";
/**
 * A rewrite response.
**/
export declare class RewriteResponse extends SpeakeasyBase {
    done?: boolean;
    kind?: string;
    objectSize?: string;
    resource?: ObjectT;
    rewriteToken?: string;
    totalBytesRewritten?: string;
}
