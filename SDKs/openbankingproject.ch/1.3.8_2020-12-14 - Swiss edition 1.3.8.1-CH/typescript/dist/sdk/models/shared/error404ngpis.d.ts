import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404PIS } from "./tppmessage404pis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 *
 * @remarks
 *
 */
export declare class Error404NGPIS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    tppMessages?: TppMessage404PIS[];
}
