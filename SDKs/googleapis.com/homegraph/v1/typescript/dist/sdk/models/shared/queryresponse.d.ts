import { SpeakeasyBase } from "../../../internal/utils";
import { QueryResponsePayload } from "./queryresponsepayload";
/**
 * Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.home.google.com/cloud-to-cloud/intents/query). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ```
 */
export declare class QueryResponse extends SpeakeasyBase {
    /**
     * Payload containing device states information.
     */
    payload?: QueryResponsePayload;
    /**
     * Request ID used for debugging. Copied from the request.
     */
    requestId?: string;
}
