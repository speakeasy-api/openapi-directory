import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not supported by Cloud Run HTTPHeader describes a custom header to be used in HTTP probes
 */
export declare class HTTPHeader extends SpeakeasyBase {
    /**
     * The header field name
     */
    name?: string;
    /**
     * The header field value
     */
    value?: string;
}
