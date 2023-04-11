import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataStatement2 } from "./obreaddatastatement2";
/**
 * Statements Read
 */
export declare class OBReadStatement2 extends SpeakeasyBase {
    data: OBReadDataStatement2;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
