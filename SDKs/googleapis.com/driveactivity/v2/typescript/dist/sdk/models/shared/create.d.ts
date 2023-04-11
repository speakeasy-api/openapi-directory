import { SpeakeasyBase } from "../../../internal/utils";
import { Copy } from "./copy";
/**
 * An object was created.
 */
export declare class Create extends SpeakeasyBase {
    /**
     * An object was created by copying an existing object.
     */
    copy?: Copy;
    /**
     * An object was created from scratch.
     */
    new?: Record<string, any>;
    /**
     * An object was uploaded into Drive.
     */
    upload?: Record<string, any>;
}
