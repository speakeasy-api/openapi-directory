import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class CustomChannel extends SpeakeasyBase {
    /**
     * Code of this custom channel, not necessarily unique across ad clients.
     */
    code?: string;
    /**
     * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsensehost#customChannel.
     */
    kind?: string;
    /**
     * Name of this custom channel.
     */
    name?: string;
}
