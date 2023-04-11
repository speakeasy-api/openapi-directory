import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataParty3 } from "./obreaddataparty3";
/**
 * Party Read
 */
export declare class OBReadParty3 extends SpeakeasyBase {
    data: OBReadDataParty3;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
