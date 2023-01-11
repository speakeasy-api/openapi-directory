import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A callback URL where events are posted
**/
export declare class Webhook extends SpeakeasyBase {
    headers: Record<string, string>;
    url: string;
}
