import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataBalance1 } from "./obreaddatabalance1";
/**
 * Balances Read
 */
export declare class OBReadBalance1 extends SpeakeasyBase {
    data: OBReadDataBalance1;
    /**
     * Links relevant to the payload
     */
    links: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta: Meta;
}
