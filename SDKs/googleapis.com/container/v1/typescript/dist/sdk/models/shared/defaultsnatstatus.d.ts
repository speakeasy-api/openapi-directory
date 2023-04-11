import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
 */
export declare class DefaultSnatStatus extends SpeakeasyBase {
    /**
     * Disables cluster default sNAT rules.
     */
    disabled?: boolean;
}
