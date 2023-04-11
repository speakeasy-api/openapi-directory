import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for advertisers that use third-party ad servers only.
 */
export declare class ThirdPartyOnlyConfig extends SpeakeasyBase {
    /**
     * Whether or not order ID reporting for pixels is enabled. This value cannot be changed once set to `true`.
     */
    pixelOrderIdReportingEnabled?: boolean;
}
