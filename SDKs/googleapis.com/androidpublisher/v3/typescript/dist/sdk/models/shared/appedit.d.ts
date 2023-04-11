import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An app edit. The resource for EditsService.
 */
export declare class AppEdit extends SpeakeasyBase {
    /**
     * Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use.
     */
    expiryTimeSeconds?: string;
    /**
     * Output only. Identifier of the edit. Can be used in subsequent API calls.
     */
    id?: string;
}
