import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage406AIS } from "./tppmessage406ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 406.
 *
 * @remarks
 *
 */
export declare class Error406NGAIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage406AIS[];
}
