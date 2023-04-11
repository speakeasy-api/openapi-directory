import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange } from "./interconnectattachmentconfigurationconstraintsbgppeerasnrange";
/**
 * [Output Only] Whether the attachment's BGP session requires/allows/disallows BGP MD5 authentication. This can take one of the following values: MD5_OPTIONAL, MD5_REQUIRED, MD5_UNSUPPORTED. For example, a Cross-Cloud Interconnect connection to a remote cloud provider that requires BGP MD5 authentication has the interconnectRemoteLocation attachment_configuration_constraints.bgp_md5 field set to MD5_REQUIRED, and that property is propagated to the attachment. Similarly, if BGP MD5 is MD5_UNSUPPORTED, an error is returned if MD5 is requested.
 */
export declare enum InterconnectAttachmentConfigurationConstraintsBgpMd5Enum {
    Md5Optional = "MD5_OPTIONAL",
    Md5Required = "MD5_REQUIRED",
    Md5Unsupported = "MD5_UNSUPPORTED"
}
export declare class InterconnectAttachmentConfigurationConstraints extends SpeakeasyBase {
    /**
     * [Output Only] Whether the attachment's BGP session requires/allows/disallows BGP MD5 authentication. This can take one of the following values: MD5_OPTIONAL, MD5_REQUIRED, MD5_UNSUPPORTED. For example, a Cross-Cloud Interconnect connection to a remote cloud provider that requires BGP MD5 authentication has the interconnectRemoteLocation attachment_configuration_constraints.bgp_md5 field set to MD5_REQUIRED, and that property is propagated to the attachment. Similarly, if BGP MD5 is MD5_UNSUPPORTED, an error is returned if MD5 is requested.
     */
    bgpMd5?: InterconnectAttachmentConfigurationConstraintsBgpMd5Enum;
    /**
     * [Output Only] List of ASN ranges that the remote location is known to support. Formatted as an array of inclusive ranges {min: min-value, max: max-value}. For example, [{min: 123, max: 123}, {min: 64512, max: 65534}] allows the peer ASN to be 123 or anything in the range 64512-65534. This field is only advisory. Although the API accepts other ranges, these are the ranges that we recommend.
     */
    bgpPeerAsnRanges?: InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange[];
}
