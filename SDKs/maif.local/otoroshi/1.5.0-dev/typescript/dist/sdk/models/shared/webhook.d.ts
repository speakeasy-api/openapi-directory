import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A callback URL where events are posted
 */
export declare class Webhook extends SpeakeasyBase {
    /**
     * Headers to authorize the call or whatever
     */
    headers: Record<string, string>;
    /**
     * The URL where events are posted
     */
    url: string;
}
