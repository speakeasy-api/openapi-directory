import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403AIS } from "./tppmessage403ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 *
 * @remarks
 *
 */
export declare class Error403NGAIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage403AIS[];
}
