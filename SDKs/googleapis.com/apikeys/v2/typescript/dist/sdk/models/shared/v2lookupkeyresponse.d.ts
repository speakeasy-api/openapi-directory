import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for `LookupKey` method.
 */
export declare class V2LookupKeyResponse extends SpeakeasyBase {
    /**
     * The resource name of the API key. If the API key has been purged, resource name is empty.
     */
    name?: string;
    /**
     * The project that owns the key with the value specified in the request.
     */
    parent?: string;
}
