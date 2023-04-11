import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataParty2 } from "./obreaddataparty2";
/**
 * Party Read
 */
export declare class OBReadParty2 extends SpeakeasyBase {
    data: OBReadDataParty2;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
