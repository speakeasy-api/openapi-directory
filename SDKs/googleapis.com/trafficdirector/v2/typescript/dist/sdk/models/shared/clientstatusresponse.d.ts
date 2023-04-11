import { SpeakeasyBase } from "../../../internal/utils";
import { ClientConfig } from "./clientconfig";
/**
 * Successful response
 */
export declare class ClientStatusResponse extends SpeakeasyBase {
    /**
     * Client configs for the clients specified in the ClientStatusRequest.
     */
    config?: ClientConfig[];
}
