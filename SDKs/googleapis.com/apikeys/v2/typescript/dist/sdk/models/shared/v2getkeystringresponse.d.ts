import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for `GetKeyString` method.
 */
export declare class V2GetKeyStringResponse extends SpeakeasyBase {
    /**
     * An encrypted and signed value of the key.
     */
    keyString?: string;
}
