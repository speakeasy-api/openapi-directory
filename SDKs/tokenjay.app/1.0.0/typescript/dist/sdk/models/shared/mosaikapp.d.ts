import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { MosaikManifest } from "./mosaikmanifest";
import { ViewElement } from "./viewelement";
/**
 * OK
 */
export declare class MosaikApp extends SpeakeasyBase {
    actions?: Action[];
    manifest?: MosaikManifest;
    view?: ViewElement;
}
