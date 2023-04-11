import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataAccount5 } from "./obreaddataaccount5";
/**
 * Accounts Read
 */
export declare class OBReadAccount5 extends SpeakeasyBase {
    data: OBReadDataAccount5;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
