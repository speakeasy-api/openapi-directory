import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The origin URI.
 */
export declare class OriginUri extends SpeakeasyBase {
    /**
     * Dash manifest URI. If multiple Dash manifests are created, only the first one is listed.
     */
    dash?: string;
    /**
     * HLS manifest URI per https://tools.ietf.org/html/rfc8216#section-4.3.4. If multiple HLS manifests are created, only the first one is listed.
     */
    hls?: string;
}
