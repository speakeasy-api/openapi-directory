import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage401AIS } from "./tppmessage401ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 *
 * @remarks
 *
 */
export declare class Error401NGAIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage401AIS[];
}
