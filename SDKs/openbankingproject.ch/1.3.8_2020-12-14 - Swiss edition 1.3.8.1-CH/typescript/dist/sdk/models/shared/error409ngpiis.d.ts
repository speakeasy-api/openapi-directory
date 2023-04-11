import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409PIIS } from "./tppmessage409piis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 *
 * @remarks
 *
 */
export declare class Error409NGPIIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage409PIIS[];
}
