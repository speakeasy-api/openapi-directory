import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage405PIIS } from "./tppmessage405piis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 *
 * @remarks
 *
 */
export declare class Error405NGPIIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage405PIIS[];
}
