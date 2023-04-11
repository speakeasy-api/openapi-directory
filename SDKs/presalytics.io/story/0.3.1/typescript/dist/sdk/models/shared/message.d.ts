import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A conversation message
 */
export declare class Message extends SpeakeasyBase {
    body?: string;
    id?: string;
    remote?: boolean;
    timestamp?: Date;
    userId?: string;
    userName?: string;
}
