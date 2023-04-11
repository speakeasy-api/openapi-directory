import { SpeakeasyBase } from "../../../internal/utils";
import { BasicFilter } from "./basicfilter";
/**
 * Sets the basic filter associated with a sheet.
 */
export declare class SetBasicFilterRequest extends SpeakeasyBase {
    /**
     * The default filter associated with a sheet.
     */
    filter?: BasicFilter;
}
