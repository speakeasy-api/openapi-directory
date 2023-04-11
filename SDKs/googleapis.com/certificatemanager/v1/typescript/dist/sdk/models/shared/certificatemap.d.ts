import { SpeakeasyBase } from "../../../internal/utils";
import { GclbTarget } from "./gclbtarget";
/**
 * Defines a collection of certificate configurations.
 */
export declare class CertificateMap extends SpeakeasyBase {
    /**
     * Output only. The creation timestamp of a Certificate Map.
     */
    createTime?: string;
    /**
     * One or more paragraphs of text description of a certificate map.
     */
    description?: string;
    /**
     * Output only. A list of GCLB targets that use this Certificate Map. A Target Proxy is only present on this list if it's attached to a Forwarding Rule.
     */
    gclbTargets?: GclbTarget[];
    /**
     * Set of labels associated with a Certificate Map.
     */
    labels?: Record<string, string>;
    /**
     * A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/*`.
     */
    name?: string;
    /**
     * Output only. The update timestamp of a Certificate Map.
     */
    updateTime?: string;
}
/**
 * Defines a collection of certificate configurations.
 */
export declare class CertificateMapInput extends SpeakeasyBase {
    /**
     * One or more paragraphs of text description of a certificate map.
     */
    description?: string;
    /**
     * Set of labels associated with a Certificate Map.
     */
    labels?: Record<string, string>;
    /**
     * A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/*`.
     */
    name?: string;
}
