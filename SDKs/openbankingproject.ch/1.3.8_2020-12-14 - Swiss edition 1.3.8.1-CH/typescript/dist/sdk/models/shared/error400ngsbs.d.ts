import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage400SBS } from "./tppmessage400sbs";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 *
 * @remarks
 *
 */
export declare class Error400NGSBS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage400SBS[];
}
