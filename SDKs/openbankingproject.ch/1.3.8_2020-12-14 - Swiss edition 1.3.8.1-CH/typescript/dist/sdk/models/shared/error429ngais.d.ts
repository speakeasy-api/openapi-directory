import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage429AIS } from "./tppmessage429ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 429.
 *
 * @remarks
 *
 */
export declare class Error429NGAIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage429AIS[];
}
