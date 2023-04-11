import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataTransaction6 } from "./obreaddatatransaction6";
/**
 * Transactions Read
 */
export declare class OBReadTransaction6 extends SpeakeasyBase {
    data: OBReadDataTransaction6;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
