import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class MicrovisorV1AccountSecret extends SpeakeasyBase {
    dateRotated?: Date;
    /**
     * The secret key; up to 100 characters.
     */
    key?: string;
    /**
     * The absolute URL of the Secret.
     */
    url?: string;
}
