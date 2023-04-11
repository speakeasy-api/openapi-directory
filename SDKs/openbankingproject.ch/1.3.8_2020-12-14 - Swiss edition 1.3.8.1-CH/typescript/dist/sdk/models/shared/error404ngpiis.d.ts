import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404PIIS } from "./tppmessage404piis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 *
 * @remarks
 *
 */
export declare class Error404NGPIIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage404PIIS[];
}
