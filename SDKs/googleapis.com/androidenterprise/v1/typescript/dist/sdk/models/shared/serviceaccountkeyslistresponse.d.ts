import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountKey } from "./serviceaccountkey";
/**
 * Successful response
 */
export declare class ServiceAccountKeysListResponse extends SpeakeasyBase {
    /**
     * The service account credentials.
     */
    serviceAccountKey?: ServiceAccountKey[];
}
