import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class MicrovisorV1AccountConfig extends SpeakeasyBase {
    dateUpdated?: Date;
    /**
     * The config key; up to 100 characters.
     */
    key?: string;
    /**
     * The absolute URL of the Config.
     */
    url?: string;
    /**
     * The config value; up to 4096 characters.
     */
    value?: string;
}
