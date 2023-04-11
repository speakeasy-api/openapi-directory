import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataStandingOrder5 } from "./obreaddatastandingorder5";
/**
 * Standing Orders Read
 */
export declare class OBReadStandingOrder6 extends SpeakeasyBase {
    data: OBReadDataStandingOrder5;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
