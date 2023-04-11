import { SpeakeasyBase } from "../../../internal/utils";
import { SignatureInfo } from "./signatureinfo";
/**
 * A decision that has been made to approve access to a resource.
 */
export declare class ApproveDecision extends SpeakeasyBase {
    /**
     * The time at which approval was granted.
     */
    approveTime?: string;
    /**
     * True when the request has been auto-approved.
     */
    autoApproved?: boolean;
    /**
     * The time at which the approval expires.
     */
    expireTime?: string;
    /**
     * If set, denotes the timestamp at which the approval is invalidated.
     */
    invalidateTime?: string;
    /**
     * Information about the digital signature of the resource.
     */
    signatureInfo?: SignatureInfo;
}
