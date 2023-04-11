import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Chat spaces to search
 */
export declare class HangoutsChatInfo extends SpeakeasyBase {
    /**
     * A list of Chat spaces IDs, as provided by the [Chat API](https://developers.google.com/chat). There is a limit of exporting from 500 Chat spaces per request.
     */
    roomId?: string[];
}
