import { SpeakeasyBase } from "../../../internal/utils";
/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export declare class HTTPHeader extends SpeakeasyBase {
    /**
     * Required. The header field name
     */
    name?: string;
    /**
     * The header field value
     */
    value?: string;
}
