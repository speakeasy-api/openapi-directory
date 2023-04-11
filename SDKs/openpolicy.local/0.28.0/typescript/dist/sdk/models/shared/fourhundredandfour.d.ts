import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not found (for example, a requested policy module or document does not exist)
 */
export declare class FourHundredAndFour extends SpeakeasyBase {
    /**
     * The error code name
     */
    code: string;
    /**
     * The description of the error (including the name of any undefined policy module)
     */
    message: string;
}
