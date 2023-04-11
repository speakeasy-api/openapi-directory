import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403SBS } from "./tppmessage403sbs";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 *
 * @remarks
 *
 */
export declare class Error403NGSBS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage403SBS[];
}
